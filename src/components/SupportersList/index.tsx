import type { ReactNode } from 'react';
import styles from './styles.module.css';
import { supporters } from '@site/src/data/supporters';

function formatMonth(month: string): string {
  const date = new Date(`${month}-01T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return month;
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export default function SupportersList(): ReactNode {
  const sorted = [...supporters].sort((a, b) => (a.month < b.month ? 1 : -1));

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Supporters</span>
      {sorted.length === 0 ? (
        <p className={styles.empty}>
          Nobody's on the list yet. Donate above, then email{' '}
          <a href="mailto:mail@termix.site">mail@termix.site</a> with the transaction hash, the
          sending address, the amount, and the name or handle you'd like listed, to be the first.
        </p>
      ) : (
        <div className={styles.list}>
          {sorted.map((s, i) => (
            <span
              key={`${s.name}-${s.month}-${i}`}
              className={`${styles.entry} ${s.tier === 'major-supporter' ? styles.major : ''}`}
              title={formatMonth(s.month)}
            >
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
