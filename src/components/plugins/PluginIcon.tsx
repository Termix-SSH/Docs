import React from "react";
import { PLUGIN_ICONS } from "@site/src/data/plugin-icons";

export default function PluginIcon({
  name,
  size = 16,
}: {
  name?: string;
  size?: number;
}): React.ReactNode {
  const Icon =
    (PLUGIN_ICONS as Record<string, React.ComponentType<{ size?: number }>>)[
      name ?? ""
    ] ?? PLUGIN_ICONS.Puzzle;
  return <Icon size={size} />;
}
