import { useEffect, useState } from "react";
import type { CommunityPluginInfo } from "./data";

const REGISTRY =
  "https://raw.githubusercontent.com/Termix-SSH/Termix-Registry/main";

interface RegistryVersion {
  version: string;
  capabilities?: string[];
}

interface RegistryPlugin {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  author: string;
  repository: string;
  docs?: string;
  versions?: RegistryVersion[];
  prereleases?: RegistryVersion[];
}

interface Stats {
  plugins?: Record<string, { downloads?: number }>;
}

export interface LiveRegistry {
  community: CommunityPluginInfo[] | null;
  downloads: Map<string, number>;
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${REGISTRY}/${path}`, { cache: "no-cache" });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

function toCommunity(p: RegistryPlugin): CommunityPluginInfo {
  const latest = p.versions?.[0] ?? p.prereleases?.[0];
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
    icon: p.icon,
    author: p.author,
    repository: p.repository,
    docs: p.docs ?? p.repository,
    latest: latest?.version ?? "",
    prerelease: !p.versions?.length,
    capabilities: latest?.capabilities ?? [],
  };
}

/**
 * Download counts and the community list straight from the registry, so new
 * submissions show up before the next docs sync. Falls back to the synced copy.
 */
export function useLiveRegistry(): LiveRegistry {
  const [live, setLive] = useState<LiveRegistry>({
    community: null,
    downloads: new Map(),
  });

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      getJson<{ plugins?: RegistryPlugin[] }>("community/index.json"),
      getJson<Stats>("official/stats.json"),
      getJson<Stats>("community/stats.json"),
    ]).then(([index, official, community]) => {
      if (cancelled) return;
      const downloads = new Map<string, number>();
      for (const stats of [official, community]) {
        for (const [id, s] of Object.entries(stats?.plugins ?? {})) {
          if (s.downloads) downloads.set(id, s.downloads);
        }
      }
      setLive({
        community: index?.plugins ? index.plugins.map(toCommunity) : null,
        downloads,
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return live;
}
