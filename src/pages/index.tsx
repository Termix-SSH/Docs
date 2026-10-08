import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Sponsors from "../components/sponsors";
import { PLUGINS } from "../components/plugins/data";

import styles from "./index.module.css";

const PARTS = [
  {
    title: "The core",
    text: "Hosts, folders, credentials, users, roles and sharing. Every install has it.",
    to: "/guide/hosts",
  },
  {
    title: "Plugins",
    text: "The terminal, files, remote desktop, Docker, metrics, sign in and more. Keep the ones you want.",
    to: "/plugins",
  },
  {
    title: "Apps",
    text: "Use it in a browser, the desktop app or the mobile app. The desktop app also works on its own.",
    to: "/install#apps",
  },
];

const CATEGORIES = [
  ...PLUGINS.reduce((map, plugin) => {
    if (!map.has(plugin.category)) map.set(plugin.category, []);
    map.get(plugin.category)!.push(plugin);
    return map;
  }, new Map<string, typeof PLUGINS>()),
].sort(([a], [b]) => a.localeCompare(b));

const PLATFORMS = [
  { name: "Docker", to: "/install/server/docker" },
  { name: "Kubernetes", to: "/install/server/kubernetes" },
  { name: "Proxmox", to: "/install/server/proxmox" },
  { name: "Windows", to: "/install/apps/windows" },
  { name: "macOS", to: "/install/apps/macos" },
  { name: "Linux", to: "/install/apps/linux" },
  { name: "iOS", to: "/install/apps/ios" },
  { name: "Android", to: "/install/apps/android" },
  { name: "CLI", to: "/cli" },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Self-hosted, plugin-based server management"
      description="Termix is a free, self-hosted server manager with SSH, remote desktop, files, Docker and more, built from plugins."
    >
      <header className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Free and open source</span>
          <h1 className={styles.title}>Termix</h1>
          <p className={styles.tagline}>
            Self-hosted, plugin-based server management.
          </p>
          <p className={styles.lede}>
            SSH, remote desktop, files, tunnels, Docker and metrics for all your
            servers, in one place you run yourself.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primary} to="/install">
              Install
            </Link>
            <Link className={styles.secondary} to="/intro">
              Read the docs
            </Link>
            <Link className={styles.secondary} href="https://demo.termix.site/">
              Try the demo
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.parts}>
              {PARTS.map((part) => (
                <Link key={part.title} to={part.to} className={styles.part}>
                  <h2>{part.title}</h2>
                  <p>{part.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2>{PLUGINS.length} official plugins</h2>
              <Link to="/plugins">See them all</Link>
            </div>
            <div className={styles.categories}>
              {CATEGORIES.map(([category, plugins]) => (
                <div key={category}>
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <ul className={styles.names}>
                    {plugins.map((plugin) => (
                      <li key={plugin.id}>
                        <Link to={`/plugins/${plugin.id}`}>{plugin.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2>Runs where you are</h2>
              <Link to="/install">All install options</Link>
            </div>
            <div className={styles.platforms}>
              {PLATFORMS.map((p) => (
                <Link key={p.name} to={p.to} className={styles.platform}>
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2>Build your own</h2>
              <Link to="/develop">Plugin docs</Link>
            </div>
            <p className={styles.muted}>
              Every feature above is a plugin built on the same SDK you can use.
              Start from the template and have a tab running on your server in a
              few minutes.
            </p>
          </div>
        </section>

        <Sponsors />
      </main>
    </Layout>
  );
}
