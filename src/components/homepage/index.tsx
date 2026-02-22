import type { ReactNode } from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.sshTerminal.title',
      message: 'SSH Terminal Access',
    }),
    description: (
      <Translate id="homepage.features.sshTerminal.description">
        Full-featured terminal with split-screen support (up to 4 panels) and tab system. Customize
        with themes, fonts, and configurations.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.fileManager.title',
      message: 'Remote File Manager',
    }),
    description: (
      <Translate id="homepage.features.fileManager.description">
        Manage files on remote servers with support for code, images, audio, and video. Upload,
        download, rename, delete, and move files seamlessly.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.docker.title',
      message: 'Docker Management',
    }),
    description: (
      <Translate id="homepage.features.docker.description">
        Control containers with start, stop, pause, and remove. View stats and access docker exec
        terminals for container management.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.tunnels.title',
      message: 'SSH Tunnel Management',
    }),
    description: (
      <Translate id="homepage.features.tunnels.description">
        Create and manage SSH tunnels with automatic reconnection and health monitoring for secure
        access to remote services.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.hostManager.title',
      message: 'Host & Credentials Manager',
    }),
    description: (
      <Translate id="homepage.features.hostManager.description">
        Save and organize SSH connections with tags, folders, and reusable credentials. Automate SSH
        key deployment across servers.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.serverMonitoring.title',
      message: 'Server Monitoring',
    }),
    description: (
      <Translate id="homepage.features.serverMonitoring.description">
        Monitor CPU, memory, disk usage, network activity, uptime, and system information on
        connected servers.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.rbac.title',
      message: 'Role-Based Access Control',
    }),
    description: (
      <Translate id="homepage.features.rbac.description">
        Create roles and share hosts across users. Manage permissions with OIDC, 2FA support, and a
        user session system.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.multiPlatform.title',
      message: 'Multi-Platform Support',
    }),
    description: (
      <Translate id="homepage.features.multiPlatform.description">
        Available as a web app, desktop application (Windows, macOS, Linux), and mobile app with a
        modern interface.
      </Translate>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Homepage(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
