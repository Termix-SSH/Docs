import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { BookOpen, Search } from "lucide-react";
import PluginIcon from "./PluginIcon";
import { byRisk, CAPABILITIES, COMMUNITY_PLUGINS, PLUGINS } from "./data";
import { useLiveRegistry } from "./live";
import styles from "./plugins.module.css";

type Source = "official" | "community";
type Sort = "name" | "downloads";

interface Entry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  author: string;
  latest: string;
  prerelease: boolean;
  capabilities: string[];
  source: Source;
  docs: string;
  repository: string;
}

function formatCount(count: number): string {
  if (count < 1000) return String(count);
  if (count < 1_000_000)
    return `${(count / 1000).toFixed(count < 10_000 ? 1 : 0)}k`;
  return `${(count / 1_000_000).toFixed(1)}M`;
}

function isSevere(capability: string): boolean {
  const risk = CAPABILITIES.get(capability)?.risk;
  return risk === "critical" || risk === "high";
}

/** Every official and community plugin as cards, like the Plugins tab in Termix. */
export default function PluginCatalog(): React.ReactNode {
  const live = useLiveRegistry();
  const [query, setQuery] = useState("");
  const [source, setSource] = useState<Source | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("name");

  const entries = useMemo<Entry[]>(() => {
    const official: Entry[] = PLUGINS.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      icon: p.icon,
      author: p.author,
      latest: p.latest,
      prerelease: false,
      capabilities: byRisk(p.capabilities),
      source: "official",
      docs: `/plugins/${p.id}`,
      repository: p.repository,
    }));
    const officialIds = new Set(official.map((p) => p.id));
    const community: Entry[] = (live.community ?? COMMUNITY_PLUGINS)
      .filter((p) => !officialIds.has(p.id))
      .map((p) => ({
        ...p,
        capabilities: byRisk(p.capabilities),
        source: "community",
      }));
    return [...official, ...community];
  }, [live.community]);

  const communityCount = entries.filter((p) => p.source === "community").length;

  const categories = useMemo(
    () => [...new Set(entries.map((p) => p.category))].sort(),
    [entries],
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const downloads = (p: Entry) => live.downloads.get(p.id) ?? 0;
    return entries
      .filter(
        (p) =>
          (!source || p.source === source) &&
          (!category || p.category === category) &&
          (!q ||
            p.name.toLowerCase().includes(q) ||
            p.id.includes(q) ||
            p.author.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)),
      )
      .sort((a, b) =>
        sort === "downloads"
          ? downloads(b) - downloads(a) || a.name.localeCompare(b.name)
          : a.name.localeCompare(b.name),
      );
  }, [entries, query, source, category, sort, live.downloads]);

  return (
    <div className={styles.catalog}>
      <h1>Plugins</h1>
      <p className={styles.intro}>
        Everything in Termix past hosts, credentials and users is a plugin.
        Install them from the Plugins tab in Termix.
      </p>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <Search size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${entries.length} plugins`}
            aria-label="Search plugins"
          />
        </label>
        <div className={styles.toolbarEnd}>
          <div className={styles.segmented} role="group" aria-label="Source">
            {(
              [
                [null, "All"],
                ["official", "Official"],
                ["community", `Community (${communityCount})`],
              ] as [Source | null, string][]
            ).map(([value, label]) => (
              <button
                key={label}
                type="button"
                className={source === value ? styles.active : undefined}
                onClick={() => setSource(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort"
          >
            <option value="name">Name</option>
            <option value="downloads">Most downloaded</option>
          </select>
        </div>
      </div>

      <div className={styles.chips}>
        {[null, ...categories].map((c) => (
          <button
            key={c ?? "__all"}
            type="button"
            className={category === c ? styles.active : undefined}
            onClick={() => setCategory(c)}
          >
            {c ?? "All categories"}
          </button>
        ))}
      </div>

      {rows.length > 0 ? (
        <div className={styles.grid}>
          {rows.map((p) => (
            <PluginCard
              key={`${p.source}:${p.id}`}
              plugin={p}
              downloads={live.downloads.get(p.id) ?? 0}
            />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          {source === "community" && communityCount === 0
            ? "No community plugins yet."
            : "Nothing matches that."}
        </p>
      )}

      <p className={styles.note}>
        Community plugins are reviewed before they are listed, but Termix does
        not make them. An admin turns them on in Termix under Plugins,
        Registries. <Link to="/develop/community-registry">Submit yours</Link>.
      </p>
    </div>
  );
}

function PluginCard({
  plugin,
  downloads,
}: {
  plugin: Entry;
  downloads: number;
}): React.ReactNode {
  const severe = plugin.capabilities.filter(isSevere);
  const official = plugin.source === "official";
  const facts = [
    plugin.author,
    plugin.latest && `v${plugin.latest}`,
    plugin.category,
    downloads > 0 &&
      `${formatCount(downloads)} ${downloads === 1 ? "download" : "downloads"}`,
  ].filter(Boolean) as string[];

  return (
    <div className={styles.card}>
      <Link
        to={plugin.docs}
        className={styles.cardHead}
        {...(official ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        <span className={styles.iconBox}>
          <PluginIcon name={plugin.icon} size={16} />
        </span>
        <span className={styles.cardText}>
          <span className={styles.cardTitle}>
            <span className={styles.cardName}>{plugin.name}</span>
            {!official && <span className={styles.badge}>Community</span>}
            {plugin.prerelease && (
              <span className={styles.badgeBeta}>Beta</span>
            )}
          </span>
          <span className={styles.cardDesc}>{plugin.description}</span>
          <span className={styles.facts}>
            {facts.map((f, i) => (
              <React.Fragment key={f}>
                {i > 0 && <span aria-hidden className={styles.factSep} />}
                <span>{f}</span>
              </React.Fragment>
            ))}
          </span>
        </span>
      </Link>
      <div className={styles.cardFoot}>
        <span
          className={styles.risk}
          title={
            severe.length > 0
              ? CAPABILITIES.get(severe[0])?.consequence
              : undefined
          }
        >
          {severe.length > 0
            ? (CAPABILITIES.get(severe[0])?.title ?? severe[0])
            : "No access to your servers"}
        </span>
        <Link
          href={plugin.repository}
          className={styles.footLink}
          aria-label={`${plugin.name} source`}
        >
          Source
        </Link>
        <Link
          to={plugin.docs}
          className={styles.footIcon}
          aria-label={`${plugin.name} docs`}
          title="Docs"
          {...(official ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          <BookOpen size={13} />
        </Link>
      </div>
    </div>
  );
}
