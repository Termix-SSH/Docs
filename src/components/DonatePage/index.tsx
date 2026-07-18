import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

const BASE_ADDRESS = '0x67e0C779119D9BcC2187564A66B80a58767d05d1';
const GHCR_PULLS_LABEL = '11M+';
const REPO = 'Termix-SSH/Termix';

const AMOUNTS = [5, 20, 50];

function useGithubStars(repo: string): number | null {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.stargazers_count) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [repo]);

  return stars;
}

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
}

function useCopy(): [string | null, (label: string, value: string) => void] {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (label: string, value: string) => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(label);
      window.setTimeout(() => setCopied((cur) => (cur === label ? null : cur)), 1800);
    });
  };

  return [copied, copy];
}

export default function DonatePage(): ReactNode {
  const stars = useGithubStars(REPO);
  const [copied, copy] = useCopy();
  const [selected, setSelected] = useState<number | null>(null);

  const selectAmount = (amount: number) => {
    setSelected(amount);
    copy(`amount-${amount}`, BASE_ADDRESS);
  };

  return (
    <div className={styles.page}>
      <div className={styles.statLine}>
        <span className={styles.stat}>
          <span className={styles.statValue}>{stars ? formatStars(stars) : '—'}</span>
          <span className={styles.statLabel}>GitHub stars</span>
        </span>
        <span className={styles.statDivider}>·</span>
        <span className={styles.stat}>
          <span className={styles.statValue}>{GHCR_PULLS_LABEL}</span>
          <span className={styles.statLabel}>container pulls</span>
        </span>
        <span className={styles.statDivider}>·</span>
        <span className={styles.stat}>
          <span className={styles.statValue}>2</span>
          <span className={styles.statLabel}>people building it</span>
        </span>
      </div>

      <p className={styles.lede}>
        Termix is free and open source, no paywalled features and no "pro" tier. It's built and
        maintained by a two-person team in our spare time, and hosting it for everyone using it
        costs real money every month. If Termix has replaced a commercial tool you'd otherwise be
        paying for, a donation helps cover that and keeps development going.
      </p>

      <div className={styles.amountBlock}>
        <span className={styles.amountLabel}>Choose an amount</span>
        <div className={styles.amountRow}>
          {AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`${styles.amountButton} ${selected === amount ? styles.amountButtonActive : ''}`}
              onClick={() => selectAmount(amount)}
            >
              {copied === `amount-${amount}` ? 'Base address copied ✓' : `$${amount}`}
            </button>
          ))}
          <button
            type="button"
            className={`${styles.amountButton} ${selected === -1 ? styles.amountButtonActive : ''}`}
            onClick={() => selectAmount(-1)}
          >
            {copied === 'amount--1' ? 'Base address copied ✓' : 'Any amount'}
          </button>
        </div>
        {selected !== null && (
          <p className={styles.amountHint}>
            Base address copied. Paste it in your wallet to send{' '}
            {selected === -1 ? 'any amount' : `$${selected}`}.
          </p>
        )}
      </div>

      <div className={styles.preferredCoin}>
        <div className={styles.preferredHeader}>
          <h2 className={styles.preferredTitle}>Base (BASE)</h2>
          <span className={styles.badge}>preferred due to lowest fees</span>
        </div>
        <p className={styles.preferredSub}>
          Stable, cheap, and fast to confirm. If you don't already hold crypto, Base is the
          easiest network to buy into and send from most exchanges and wallets.
        </p>
        <div className={styles.addressRow}>
          <img
            src="/img/qr-base.png"
            alt="Base donation address QR code"
            className={styles.qr}
            width={128}
            height={128}
          />
          <div className={styles.addressBlock}>
            <code className={styles.address}>{BASE_ADDRESS}</code>
            <button
              type="button"
              className={styles.copyButton}
              onClick={() => copy('base-main', BASE_ADDRESS)}
            >
              {copied === 'base-main' ? 'copied ✓' : 'copy'}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.preferredCoin}>
        <div className={styles.preferredHeader}>
          <h2 className={styles.preferredTitle}>Drips</h2>
          <span className={styles.badge}>recurring or one-time</span>
        </div>
        <p className={styles.preferredSub}>
          Support Termix's GitHub repo directly through Drips, a crypto-based funding platform for open source
          projects.
        </p>
        <a
          href="https://www.drips.network/app/projects/github/Termix-SSH/Termix"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.copyButton}
        >
          Fund on Drips
        </a>
      </div>

      <details className={styles.otherCoins}>
        <summary className={styles.otherCoinsSummary}>
          Prefer a different coin? Ethereum, Bitcoin, Bitcoin Cash, Solana, Litecoin, Monero
        </summary>
        <div className={styles.otherCoinsGrid}>
          <CoinRow name="Ethereum" ticker="ETH" img="qr-eth.png" address={BASE_ADDRESS} copy={copy} />
          <CoinRow
            name="Bitcoin"
            ticker="BTC"
            img="qr-btc.png"
            address="bc1qhuguk8gckzk6agzth2nc4duad2wuv0qhcukz3e"
            copy={copy}
          />
          <CoinRow
            name="Bitcoin Cash"
            ticker="BCH"
            img="qr-bch.png"
            address="bitcoincash:qqgx7hrq7m7fy27rely635t7jx66ugtm85n4u9mmhm"
            copy={copy}
          />
          <CoinRow
            name="Solana"
            ticker="SOL"
            img="qr-sol.png"
            address="FA42vgp3A2P5aywwD7Qev7GyZK1Yd5p2cfLLGZ5Vs5cv"
            copy={copy}
          />
          <CoinRow
            name="Litecoin"
            ticker="LTC"
            img="qr-ltc.png"
            address="ltc1q04y9m60lawy3cscjpy6svfagmag34rr5gdkz97"
            copy={copy}
          />
          <CoinRow
            name="Monero"
            ticker="XMR"
            img="qr-xmr.png"
            address="8As7QMowT5kaa3oLrF2JjVQtY8YFHNE4vfswYjQsVXmRSdp8FWhh9GSKcyxzwkUDahApqCyXT7MkcdKGUqCPQpkfAmU8NTt"
            copy={copy}
          />
        </div>
        <p className={styles.requestCoin}>
          Need a coin that isn't listed?{' '}
          <a href="https://github.com/Termix-SSH/Support/issues/new/choose">Open a request</a>.
        </p>
      </details>

      <p className={styles.lede}>
        Company interested in a paid placement in the README to support development? Email{' '}
        <a href="mailto:mail@termix.site">mail@termix.site</a>.
      </p>
    </div>
  );
}

function CoinRow({
  name,
  ticker,
  img,
  address,
  copy,
}: {
  name: string;
  ticker: string;
  img: string;
  address: string;
  copy: (label: string, value: string) => void;
}) {
  const [localCopied, setLocalCopied] = useState(false);

  const handleCopy = () => {
    copy(`coin-${ticker}`, address);
    setLocalCopied(true);
    window.setTimeout(() => setLocalCopied(false), 1800);
  };

  return (
    <div className={styles.coinRow}>
      <img src={`/img/${img}`} alt={`${name} donation address QR code`} className={styles.coinQr} width={72} height={72} />
      <div className={styles.coinInfo}>
        <span className={styles.coinName}>
          {name} <span className={styles.coinTicker}>({ticker})</span>
        </span>
        <code className={styles.coinAddress}>{address}</code>
      </div>
      <button type="button" className={styles.copyButton} onClick={handleCopy}>
        {localCopied ? 'copied ✓' : 'copy'}
      </button>
    </div>
  );
}
