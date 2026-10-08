import React from "react";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import PluginIcon from "./PluginIcon";
import { findPlugin, versionPath } from "./data";
import styles from "./plugins.module.css";

/** The top of every plugin page: name, what it does, version and links. */
export default function PluginHeader({
  id,
  version,
  overview,
}: {
  id: string;
  version: string;
  overview: boolean;
}): React.ReactNode {
  const plugin = findPlugin(id);
  const history = useHistory();
  if (!plugin) return null;
  const current = plugin.versions.find((v) => v.version === version);
  const isLatest = current?.latest ?? version === plugin.latest;
  const base = versionPath(id, version, isLatest);

  return (
    <header className={styles.header}>
      {!isLatest && (
        <div className={styles.banner}>
          These are the docs for {plugin.name} {version}.{" "}
          <Link to={versionPath(id, plugin.latest, true)}>
            See the latest version
          </Link>
          .
        </div>
      )}
      {overview ? (
        <>
          <div className={styles.titleRow}>
            <span className={styles.titleIcon}>
              <PluginIcon name={plugin.icon} size={22} />
            </span>
            <h1 className={styles.title}>{plugin.name}</h1>
          </div>
          <p className={styles.lede}>{plugin.description}</p>
        </>
      ) : (
        <Link to={base} className={styles.crumb}>
          <PluginIcon name={plugin.icon} size={14} /> {plugin.name}
        </Link>
      )}
      <div className={overview ? styles.meta : styles.metaSmall}>
        <select
          className={styles.version}
          value={version}
          aria-label="Version"
          onChange={(e) => {
            const picked = plugin.versions.find(
              (v) => v.version === e.target.value,
            );
            if (picked)
              history.push(versionPath(id, picked.version, picked.latest));
          }}
        >
          {plugin.versions.map((v) => (
            <option key={v.version} value={v.version}>
              v{v.version}
              {v.latest ? " (latest)" : v.prerelease ? " (beta)" : ""}
            </option>
          ))}
        </select>
        <span>{plugin.category}</span>
        <Link href={plugin.repository}>Source</Link>
        {plugin.apiPath && isLatest && <Link to={plugin.apiPath}>API</Link>}
        <Link to={`${base}/changelog`}>Changelog</Link>
      </div>
      {overview && isLatest && plugin.features.length > 0 && (
        <ul className={styles.features}>
          {plugin.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
    </header>
  );
}
