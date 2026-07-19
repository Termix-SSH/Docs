import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type Snapshot = {
  currency: string;
  total: number;
  priceAsOf: number | null;
};

type Milestone = {
  name: string;
  cost: number;
  description: string;
};

const MILESTONES: Milestone[] = [
  {
    name: 'SAML',
    cost: 1000,
    description:
      "Lets companies log into Termix using their existing corporate sign-in system.",
  },
  {
    name: 'Kubernetes',
    cost: 2500,
    description:
      'Adds a way to manage and view Kubernetes clusters directly inside Termix, like you already can with Docker.',
  },
  {
    name: 'Agent',
    cost: 5000,
    description:
      "A small program you install on a server that lets Termix reach it securely without opening any ports or setting up jump hosts.",
  },
];

function formatFiat(value: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${value.toFixed(0)} ${currency.toUpperCase()}`;
  }
}

export default function DonationMilestones(): ReactNode {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/donation-total.json', { cache: 'no-store' })
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

  const total = snapshot?.total ?? 0;
  const currency = snapshot?.currency ?? 'usd';

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Milestones</span>
      <p className={styles.sub}>
        Funded by all donations to date{snapshot ? ` — ${formatFiat(total, currency)} raised` : ''}.
        Each milestone unlocks a new feature once total donations reach its goal.
      </p>
      <div className={styles.list}>
        {MILESTONES.map((m) => {
          const progress = snapshot ? Math.min(100, (total / m.cost) * 100) : 0;
          const reached = snapshot ? total >= m.cost : false;
          return (
            <div key={m.name} className={styles.milestone}>
              <div className={styles.milestoneHeader}>
                <span className={styles.milestoneName}>
                  {m.name}{' '}
                  <span className={styles.milestoneCost}>({formatFiat(m.cost, currency)})</span>
                </span>
                <span className={`${styles.status} ${reached ? styles.statusDone : ''}`}>
                  {reached ? 'Unlocked' : snapshot ? `${Math.floor(progress)}%` : '—'}
                </span>
              </div>
              <p className={styles.milestoneDescription}>{m.description}</p>
              <div className={styles.progressTrack}>
                <div
                  className={`${styles.progressFill} ${reached ? styles.progressFillDone : ''}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
