import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'SSH Terminal Access',
    description: (
      <>
        Full-featured terminal with split-screen support (up to 4 panels) and tab system.
        Customize with themes, fonts, and configurations.
      </>
    ),
  },
  {
    title: 'Remote File Manager',
    description: (
      <>
        Manage files on remote servers with support for code, images, audio, and video.
        Upload, download, rename, delete, and move files seamlessly.
      </>
    ),
  },
  {
    title: 'Docker Management',
    description: (
      <>
        Control containers with start, stop, pause, and remove. View stats and access
        docker exec terminals for container management.
      </>
    ),
  },
  {
    title: 'SSH Tunnel Management',
    description: (
      <>
        Create and manage SSH tunnels with automatic reconnection and health monitoring
        for secure access to remote services.
      </>
    ),
  },
  {
    title: 'Host & Credentials Manager',
    description: (
      <>
        Save and organize SSH connections with tags, folders, and reusable credentials.
        Automate SSH key deployment across servers.
      </>
    ),
  },
  {
    title: 'Server Monitoring',
    description: (
      <>
        Monitor CPU, memory, disk usage, network activity, uptime, and system information
        on connected servers.
      </>
    ),
  },
  {
    title: 'Role-Based Access Control',
    description: (
      <>
        Create roles and share hosts across users. Manage permissions with OIDC, 2FA support,
        and a user session system.
      </>
    ),
  },
  {
    title: 'Multi-Platform Support',
    description: (
      <>
        Available as a web app, desktop application (Windows, macOS, Linux), and mobile app
        with a modern interface.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
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
