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
    title: 'SSH Terminal',
    description: (
      <>
        Full-featured terminal with split-screen support (up to 4 panels) and a browser-like tab
        system. Customize with themes, fonts, and other components. Supports jump hosts, Warpgate,
        TOTP, SOCKS5, OPKSSH, tmux, port knocking, and more. Run one command across all open
        terminals, save reusable command snippets, and auto-complete from your command history.
      </>
    ),
  },
  {
    title: 'Remote Desktop',
    description: (
      <>
        RDP, VNC, and Telnet support over the browser with complete customization and split
        screening.
      </>
    ),
  },
  {
    title: 'Remote File Manager',
    description: (
      <>
        Manage files directly on remote servers with support for viewing and editing code, images,
        audio, and video. Upload, download, rename, delete, and move files seamlessly with sudo
        support.
      </>
    ),
  },
  {
    title: 'SSH Tunnel Management',
    description: (
      <>
        Create and manage server-to-server SSH tunnels with automatic reconnection, health
        monitoring, and local, remote, or dynamic SOCKS forwarding. Optional preset snapshots can be
        saved to the server and loaded across clients.
      </>
    ),
  },
  {
    title: 'Host Manager',
    description: (
      <>
        Save, organize, and manage SSH connections with tags and folders. Save reusable login info
        and automate SSH key deployment. Quick connect without saving, or use the command palette
        (double tap left shift) to open connections from your keyboard.
      </>
    ),
  },
  {
    title: 'Docker Management',
    description: (
      <>
        Start, stop, pause, and remove containers. View container stats and control containers with a
        docker exec terminal. Built to simplify managing containers, not replace Portainer or Dockge.
      </>
    ),
  },
  {
    title: 'Server Stats & Dashboard',
    description: (
      <>
        View CPU, memory, disk usage, network, uptime, firewall, and port monitor on most
        Linux-based servers. Customize your dashboard with a network graph to visualize your homelab
        based off your SSH connections with status support.
      </>
    ),
  },
  {
    title: 'Auth & Access Control',
    description: (
      <>
        Secure user management with admin controls, OIDC (with access control), and 2FA (TOTP)
        support. Create roles and share hosts across users. View and revoke active sessions across
        all platforms. Link OIDC and local accounts together.
      </>
    ),
  },
  {
    title: 'API Keys & Data',
    description: (
      <>
        Create user-scoped API keys with expiration dates for automation and CI. Export and import
        SSH hosts, credentials, and file manager data. Backend stored as encrypted SQLite database
        files.
      </>
    ),
  },
  {
    title: 'Platform Support',
    description: (
      <>
        Available as a web app, desktop application (Windows, Linux, macOS, can run standalone
        without the Termix backend), PWA, and dedicated mobile app for iOS and Android. Built-in SSL
        certificate generation with HTTPS redirects. Supports ~30 languages via Crowdin.
      </>
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
