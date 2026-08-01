import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type Snapshot = {
  month: string;
  currency: string;
  fiatTotal: number;
  updatedAt: string | null;
};

function formatMonth(month: string): string {
  const date = new Date(`${month}-01T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return month;
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function formatFiat(value: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(value);
  } catch {
    return `${value.toFixed(2)} ${currency.toUpperCase()}`;
  }
}

export default function MonthlyDonations(): ReactNode {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/donation-snapshot.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Snapshot) => {
        if (!cancelled) setSnapshot(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>
          Donations received{snapshot ? ` — ${formatMonth(snapshot.month)}` : ''}
        </span>
        <span className={styles.amount}>
          {snapshot ? (
            <span className={styles.total}>
              {formatFiat(snapshot.fiatTotal, snapshot.currency)}
            </span>
          ) : (
            <span className={styles.loading}>Loading…</span>
          )}
        </span>
      </div>
    </div>
  );
}
