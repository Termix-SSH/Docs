import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '../components/homepage';
import Sponsors from '../components/sponsors';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" href="https://docs.termix.site/install" target="_self">
            Install
          </Link>
          <Link className="button button--secondary button--lg" href="https://docs.termix.site/intro" target="_self">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title={`Home`}>
      <HomepageHeader />
      <main>
        <Sponsors />
        <Homepage />
      </main>
    </Layout>
  );
}
