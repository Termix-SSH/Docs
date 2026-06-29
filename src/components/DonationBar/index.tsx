import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

const MONTHLY_GOAL_USD = 750;

const EVM_ADDRESS = '0x83eA1Db55cc6E34fCD11Da2b7849621af67b6E34';
const BTC_ADDRESS = 'bc1qrxc3vpnl6qhh9p8akjmjukcgmgmq852ua64h05';
const SOL_ADDRESS = 'T4BF5ioySVUjwaPNw4Sdu7oK8SXLxgQRcMaTQ6YJ2UJ';

type Snapshot = {
  month: string;
  ethBal: number;
  baseBal: number;
  btcBal: number;
  solBal: number;
};

type Prices = { eth: number; btc: number; sol: number };

function fetchWithTimeout(input: RequestInfo, init?: RequestInit, ms = 8000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(input, { ...init, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

async function fetchPrices(): Promise<Prices> {
  const res = await fetchWithTimeout(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,solana&vs_currencies=usd'
  );
  const data = await res.json();
  return {
    eth: data.ethereum?.usd ?? 0,
    btc: data.bitcoin?.usd ?? 0,
    sol: data.solana?.usd ?? 0,
  };
}

async function fetchSnapshot(): Promise<Snapshot> {
  const res = await fetchWithTimeout('/donation-snapshot.json', { cache: 'no-store' });
  return res.json();
}

async function fetchEthBalance(address: string): Promise<number> {
  // eth.blockscout.com — no API key required, same interface as Base
  const res = await fetchWithTimeout(
    `https://eth.blockscout.com/api/v2/addresses/${address}`
  );
  const data = await res.json();
  const wei = BigInt(data.coin_balance ?? '0');
  return Number(wei) / 1e18;
}

async function fetchBaseBalance(address: string): Promise<number> {
  // Base ETH (native token on Base, priced as ETH)
  const res = await fetchWithTimeout(
    `https://base.blockscout.com/api/v2/addresses/${address}`
  );
  const data = await res.json();
  const wei = BigInt(data.coin_balance ?? '0');
  return Number(wei) / 1e18;
}

async function fetchBtcBalance(address: string): Promise<number> {
  const res = await fetchWithTimeout(`https://blockstream.info/api/address/${address}`);
  const data = await res.json();
  const sats =
    (data.chain_stats?.funded_txo_sum ?? 0) -
    (data.chain_stats?.spent_txo_sum ?? 0);
  return sats / 1e8;
}

async function fetchSolBalance(address: string): Promise<number> {
  const res = await fetchWithTimeout('https://api.mainnet-beta.solana.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'getBalance',
      params: [address],
    }),
  });
  const data = await res.json();
  return (data.result?.value ?? 0) / 1e9;
}

export default function DonationBar(): ReactNode {
  const [totalUsd, setTotalUsd] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [prices, snapshot, ethBal, baseBal, btcBal, solBal] =
          await Promise.all([
            fetchPrices(),
            fetchSnapshot(),
            fetchEthBalance(EVM_ADDRESS),
            fetchBaseBalance(EVM_ADDRESS),
            fetchBtcBalance(BTC_ADDRESS),
            fetchSolBalance(SOL_ADDRESS),
          ]);

        // Subtract the snapshot baseline to get only this month's inflow
        const deltaEth = Math.max(0, ethBal - snapshot.ethBal);
        const deltaBase = Math.max(0, baseBal - snapshot.baseBal);
        const deltaBtc = Math.max(0, btcBal - snapshot.btcBal);
        const deltaSol = Math.max(0, solBal - snapshot.solBal);

        const total =
          deltaEth * prices.eth +
          deltaBase * prices.eth +
          deltaBtc * prices.btc +
          deltaSol * prices.sol;

        setTotalUsd(total);
      } catch {
        setError(true);
      }
    }
    load();
  }, []);

  const percent =
    totalUsd !== null ? Math.min((totalUsd / MONTHLY_GOAL_USD) * 100, 100) : 0;

  const displayAmount =
    totalUsd !== null
      ? totalUsd < 1
        ? '< $1'
        : `$${Math.floor(totalUsd).toLocaleString()}`
      : '...';

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>Monthly Donation Goal</span>
        <span className={styles.amount}>
          {error ? (
            <span className={styles.error}>unavailable</span>
          ) : (
            <>
              <span className={styles.current}>{displayAmount}</span>
              <span className={styles.separator}> / </span>
              <span className={styles.goal}>${MONTHLY_GOAL_USD.toLocaleString()}</span>
            </>
          )}
        </span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: error ? '0%' : `${percent}%` }}
        />
      </div>
      {!error && totalUsd !== null && (
        <p className={styles.sub}>
          {percent >= 100
            ? 'Goal reached this month. Thank you!'
            : `${Math.round(percent)}% of goal reached this month`}
        </p>
      )}
    </div>
  );
}
