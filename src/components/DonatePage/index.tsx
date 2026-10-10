import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

const COINS = [
  {
    name: "Base",
    ticker: "BASE",
    img: "qr-base.png",
    address: "0x67e0C779119D9BcC2187564A66B80a58767d05d1",
    note: "Lowest fees",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    img: "qr-eth.png",
    address: "0x67e0C779119D9BcC2187564A66B80a58767d05d1",
  },
  {
    name: "Bitcoin",
    ticker: "BTC",
    img: "qr-btc.png",
    address: "bc1qhuguk8gckzk6agzth2nc4duad2wuv0qhcukz3e",
  },
  {
    name: "Bitcoin Cash",
    ticker: "BCH",
    img: "qr-bch.png",
    address: "bitcoincash:qqgx7hrq7m7fy27rely635t7jx66ugtm85n4u9mmhm",
  },
  {
    name: "Solana",
    ticker: "SOL",
    img: "qr-sol.png",
    address: "FA42vgp3A2P5aywwD7Qev7GyZK1Yd5p2cfLLGZ5Vs5cv",
  },
  {
    name: "Litecoin",
    ticker: "LTC",
    img: "qr-ltc.png",
    address: "ltc1q04y9m60lawy3cscjpy6svfagmag34rr5gdkz97",
  },
  {
    name: "Monero",
    ticker: "XMR",
    img: "qr-xmr.png",
    address:
      "8As7QMowT5kaa3oLrF2JjVQtY8YFHNE4vfswYjQsVXmRSdp8FWhh9GSKcyxzwkUDahApqCyXT7MkcdKGUqCPQpkfAmU8NTt",
  },
];

export default function DonatePage(): ReactNode {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (ticker: string, address: string) => {
    navigator.clipboard?.writeText(address).then(() => {
      setCopied(ticker);
      window.setTimeout(
        () => setCopied((cur) => (cur === ticker ? null : cur)),
        1800,
      );
    });
  };

  return (
    <div className={styles.grid}>
      {COINS.map((coin) => (
        <div key={coin.ticker} className={styles.coin}>
          <img
            src={`/img/${coin.img}`}
            alt={`${coin.name} address QR code`}
            className={styles.qr}
            width={120}
            height={120}
          />
          <div className={styles.info}>
            <span className={styles.name}>
              {coin.name} <span className={styles.ticker}>{coin.ticker}</span>
              {coin.note && <span className={styles.note}>{coin.note}</span>}
            </span>
            <code className={styles.address}>{coin.address}</code>
            <button
              type="button"
              className={styles.copy}
              onClick={() => copy(coin.ticker, coin.address)}
            >
              {copied === coin.ticker ? "Copied" : "Copy address"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
