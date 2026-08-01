import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Sponsor = {
  name: string;
  href: string;
  logo: string;
};

const SponsorList: Sponsor[] = [
  {
    name: 'DigitalOcean',
    href: 'https://www.digitalocean.com/',
    logo: 'https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg',
  },
  {
    name: 'Crowdin',
    href: 'https://crowdin.com/',
    logo: 'https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg',
  },
  {
    name: 'Blacksmith',
    href: 'https://www.blacksmith.sh/',
    logo: 'https://cdn.prod.website-files.com/681bfb0c9a4601bc6e288ec4/683ca9e2c5186757092611b8_e8cb22127df4da0811c4120a523722d2_logo-backsmith-wordmark-light.svg',
  },
  {
    name: 'Cloudflare',
    href: 'https://www.cloudflare.com/',
    logo: 'https://sirv.sirv.com/website/screenshots/cloudflare/cloudflare-logo.png?w=300',
  },
  {
    name: 'Akamai',
    href: 'https://akamai.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Akamai_logo.svg',
  },
  {
    name: 'AWS',
    href: 'https://aws.amazon.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png',
  },
  {
    name: 'Rack Genius',
    href: 'https://rackgenius.com/',
    logo: 'https://rackgenius.com/rackgenius-logo.png',
  },
  {
    name: 'Ginernet',
    href: 'https://ginernet.com/',
    logo: 'https://ginernet.com/img/logo-web.png',
  },
];

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
