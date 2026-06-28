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
        and fonts. Supports jump hosts, Warpgate, TOTP, SOCKS5, OPKSSH, tmux, port knocking, SSH
        agent forwarding, Bitwarden SSH agent, and HashiCorp Vault SSH certificate signing. Run one
        command across every open terminal, save reusable snippets, and reuse your command history.
        Sessions and tabs persist across devices and refreshes.
      </>
    ),
  },
  {
    title: 'Remote Desktop',
    description: (
      <>
        RDP, VNC, and Telnet, all in the browser, powered by Guacamole. Full customization and split
        screen support.
      </>
    ),
  },
  {
    title: 'Remote File Manager',
    description: (
      <>
        Manage files on remote servers over SFTP, with support for viewing and editing code, images,
        audio, and video. Upload, download, rename, delete, and move files between servers, with sudo
        support.
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
        Save and organize SSH connections with tags and nested folders. Reuse login info and automate
        SSH key deployment. Quick connect without saving, or jump to any connection from the keyboard
        with the command palette (double tap left shift). Pull devices from your Tailscale tailnet or
        import guests from Proxmox.
      </>
    ),
  },
  {
    title: 'Docker & Podman',
    description: (
      <>
        Start, stop, pause, and remove containers. View live container stats and open a docker exec
        terminal directly in the UI. Supports both Docker and Podman as the container runtime.
      </>
    ),
  },
  {
    title: 'Host Metrics',
    description: (
      <>
        View CPU, memory, disk, network, uptime, system info, firewall rules, open ports, log viewer,
        users, permissions, and SSL certificates on most Linux servers. Includes time-series history
        graphs and a network graph that maps your homelab with live status.
      </>
    ),
  },
  {
    title: 'Alerts',
    description: (
      <>
        Set threshold-based alert rules on any host metric and get notified via ntfy or webhooks when
        they fire or resolve. Full alert history log included.
      </>
    ),
  },
  {
    title: 'Homepage',
    description: (
      <>
        A fully customizable homepage with a drag-and-drop widget grid. Add widgets for host status,
        service links, clocks, notes, RSS feeds, weather, Docker containers, host metrics charts,
        embedded terminals, iframes, and more.
      </>
    ),
  },
  {
    title: 'Auth & Access Control',
    description: (
      <>
        Sign in with local accounts, OIDC, LDAP, GitHub, or Google, all side by side. Add 2FA with
        TOTP or passkeys (WebAuthn). Create roles and share hosts between users with fine-grained
        RBAC. View and revoke active sessions across every platform, link SSO accounts to local ones,
        and review a full audit log of user actions.
      </>
    ),
  },
  {
    title: 'Serial Connections',
    description: (
      <>
        Connect to serial devices like routers, switches, and microcontrollers directly from the
        browser or desktop app. Configure baud rate, data bits, stop bits, and parity.
      </>
    ),
  },
  {
    title: 'Termix ID',
    description: (
      <>
        A self-hosted alternative to sshid.io built into Termix. Claim a handle, publish your public
        SSH keys at a resolver URL, and use a built-in CA to issue SSH certificates.
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
        automatic SSL certificate generation with HTTPS redirects, and support for around 30
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
