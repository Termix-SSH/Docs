import plugins from "@site/src/data/plugins.json";
import capabilities from "@site/src/data/capabilities.json";

export interface PluginVersionInfo {
  version: string;
  latest: boolean;
  prerelease: boolean;
  publishedAt: string | null;
}

export interface PluginInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  author: string;
  repository: string;
  docs: string;
  latest: string;
  features: string[];
  capabilities: string[];
  env: { name: string; description: string; default?: string }[];
  dependencies: Record<string, string>;
  hasApi: boolean;
  apiPath: string | null;
  versions: PluginVersionInfo[];
}

export interface CapabilityInfo {
  id: string;
  risk: "critical" | "high" | "medium" | "low";
  title: string;
  consequence: string;
}

export const PLUGINS = plugins as PluginInfo[];
export const CAPABILITIES = new Map(
  (capabilities as CapabilityInfo[]).map((c) => [c.id, c]),
);
export const RISK_ORDER = ["critical", "high", "medium", "low"];

export function findPlugin(id: string): PluginInfo | undefined {
  return PLUGINS.find((p) => p.id === id);
}

export function versionPath(id: string, version: string, latest: boolean) {
  return latest ? `/plugins/${id}` : `/plugins/${id}/v/${version}`;
}

export function byRisk(ids: string[]): string[] {
  return [...ids].sort(
    (a, b) =>
      RISK_ORDER.indexOf(CAPABILITIES.get(a)?.risk ?? "low") -
      RISK_ORDER.indexOf(CAPABILITIES.get(b)?.risk ?? "low"),
  );
}
