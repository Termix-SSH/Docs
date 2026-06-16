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
        A full terminal with split screen (up to 4 panels) and tabs like a browser. Customize themes
        and fonts. Supports jump hosts, Warpgate, TOTP, SOCKS5, OPKSSH, tmux, and port knocking. Run
        one command across every open terminal, save reusable snippets, and reuse your command
        history.
      </>
    ),
  },
  {
    title: 'Remote Desktop',
    description: (
      <>
        RDP, VNC, and Telnet, all in the browser. Full customization and split screen support.
      </>
    ),
  },
  {
    title: 'Remote File Manager',
    description: (
      <>
        Manage files on remote servers, with support for viewing and editing code, images, audio,
        and video. Upload, download, rename, delete, and move files, with sudo support.
      </>
    ),
  },
  {
    title: 'SSH Tunnel Management',
    description: (
      <>
        Create and manage SSH tunnels with automatic reconnection and health monitoring. Supports
        local, remote, and dynamic SOCKS forwarding. Save tunnel presets to the server and load them
        on any client.
      </>
    ),
  },
  {
    title: 'Host Manager',
    description: (
      <>
        Save and organize SSH connections with tags and folders. Reuse login info and automate SSH
        key deployment. Quick connect without saving, or open a connection from your keyboard with
        the command palette (double tap left shift). Pull devices straight from your Tailscale
        tailnet or import guests from Proxmox.
      </>
    ),
  },
  {
    title: 'Docker Management',
    description: (
      <>
        Start, stop, pause, and remove containers. View container stats and open a docker exec
        terminal. Built to make managing containers easier, not to replace Portainer or Dockge.
      </>
    ),
  },
  {
    title: 'Host Metrics & Dashboard',
    description: (
      <>
        View CPU, memory, disk usage, network, uptime, firewall, and open ports on most Linux
        servers. Customize your dashboard with a network graph that maps your homelab from your SSH
        connections, with live status.
      </>
    ),
  },
  {
    title: 'Auth & Access Control',
    description: (
      <>
        Sign in with local accounts, OIDC, LDAP, GitHub, or Google, all side by side. Add 2FA with
        TOTP. Create roles and share hosts between users. View and revoke active sessions across
        every platform, and link an SSO account to a local one.
      </>
    ),
  },
  {
    title: 'API Keys & Data',
    description: (
      <>
        Create user-scoped API keys with expiration dates for automation and CI. Export and import
        SSH hosts, credentials, and file manager data. The backend is stored as an encrypted SQLite
        database.
      </>
    ),
  },
  {
    title: 'Platform Support',
    description: (
      <>
        Available as a web app, a desktop app for Windows, Linux, and macOS (can run standalone
        without the Termix backend), a PWA, and dedicated mobile apps for iOS and Android. Includes
        built in SSL certificate generation with HTTPS redirects, and support for around 30
        languages through Crowdin.
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
