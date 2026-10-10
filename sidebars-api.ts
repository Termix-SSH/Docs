import fs from "node:fs";
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// One sidebar for every API: core first, then each plugin, made by
// gen-api-docs from the specs that scripts/sync-content.mjs wrote.
const specs: { id: string; name: string }[] = fs.existsSync(
  "./src/data/api-specs.json",
)
  ? JSON.parse(fs.readFileSync("./src/data/api-specs.json", "utf8"))
  : [];

type Item = { type: string; id?: string };

function generated(id: string): Item[] {
  const file = `./api/${id}/sidebar.ts`;
  if (!fs.existsSync(file)) return [];
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(file);
  const items = mod.default ?? mod;
  return Array.isArray(items) ? items : (items.apisidebar ?? []);
}

const sections = [{ id: "core", name: "Termix core" }, ...specs].flatMap(
  (spec) => {
    const items = generated(spec.id);
    const info = items[0]?.type === "doc" ? items[0].id : null;
    if (!info) return [];
    let routes = items.slice(1) as (Item & { items?: Item[] })[];
    // A spec with one tag would nest its routes twice, so list them directly.
    if (routes.length === 1 && routes[0].type === "category") {
      routes = routes[0].items ?? [];
    }
    return [
      {
        type: "category" as const,
        label: spec.name,
        collapsed: true,
        link: { type: "doc" as const, id: info },
        items: routes as never,
      },
    ];
  },
);

const sidebars: SidebarsConfig = {
  api: ["index", ...sections],
};

export default sidebars;
