import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import sponsorsData from '../../../static/sponsors.json';
import styles from './styles.module.css';

type Sponsor = {
  name: string;
  href: string;
  logo: string;
};

const SponsorList: Sponsor[] = sponsorsData.sponsors;

export default function Sponsors(): ReactNode {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <Heading as="h2" className={styles.sponsorsTitle}>
          Sponsors
        </Heading>
        <p className={styles.sponsorsSubtitle}>
          Interested in a paid placement to support development? Email{' '}
          <a href="mailto:mail@termix.site">mail@termix.site</a>.
        </p>
        <div className={styles.sponsorsGrid}>
          {SponsorList.map((sponsor) => (
            <a
              key={sponsor.name}
              className={styles.sponsorLink}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              <img className={styles.sponsorLogo} src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
        <p className={styles.sponsorsFootnote}>
          Want to run Termix on a cloud VPS instead of your own hardware? Our sponsor{' '}
          <a href="https://ginernet.com/" target="_blank" rel="noopener noreferrer sponsored">
            GINERNET
          </a>{' '}
          is one option, with a step-by-step{' '}
          <Link to="/install/ginernet">deployment guide</Link> in the docs.
        </p>
      </div>
    </section>
  );
}
