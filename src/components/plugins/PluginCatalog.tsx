import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { Search } from "lucide-react";
import PluginIcon from "./PluginIcon";
import { PLUGINS, type PluginInfo } from "./data";
import styles from "./plugins.module.css";

/** Every official plugin as a plain list, grouped by category. */
export default function PluginCatalog(): React.ReactNode {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (p: PluginInfo) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.id.includes(q) ||
      p.description.toLowerCase().includes(q);
    const map = new Map<string, PluginInfo[]>();
    for (const p of PLUGINS.filter(match)) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [query]);

  return (
    <div className={styles.catalog}>
      <h1>Plugins</h1>
      <p className={styles.intro}>
        Everything in Termix past hosts, credentials and users is a plugin.
        These are the official ones. Install them from the{" "}
        <strong>Plugins</strong> tab in Termix.
      </p>

      <label className={styles.search}>
        <Search size={15} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${PLUGINS.length} plugins`}
          aria-label="Search plugins"
        />
      </label>

      {groups.map(([category, items]) => (
        <section key={category} className={styles.group}>
          <h2 className={styles.groupTitle}>{category}</h2>
          <ul className={styles.list}>
            {items.map((p) => (
              <li key={p.id}>
                <Link to={`/plugins/${p.id}`} className={styles.row}>
                  <span className={styles.rowIcon}>
                    <PluginIcon name={p.icon} size={18} />
                  </span>
                  <span className={styles.rowText}>
                    <span className={styles.rowName}>{p.name}</span>
                    <span className={styles.rowDesc}>{p.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {groups.length === 0 && (
        <p className={styles.intro}>Nothing matches that.</p>
      )}

      <p className={styles.note}>
        Community plugins are not listed here. Each one can link its own docs
        from its manifest, and Termix shows that link on the plugin's page.
      </p>
    </div>
  );
}
