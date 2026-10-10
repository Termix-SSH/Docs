#!/usr/bin/env node
// Fails when a docs page the Termix app links to (src/ui/lib/docs-pages.json
// in core, copied to src/data/app-links.json by sync) is not in the build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const build = path.join(root, "build");
const links = JSON.parse(
  fs.readFileSync(path.join(root, "src", "data", "app-links.json"), "utf8"),
);

if (!fs.existsSync(build)) {
  console.error("Run npm run build first.");
  process.exit(1);
}

const missing = [];
for (const [key, link] of Object.entries(links)) {
  const [page, anchor] = link.split("#");
  const file = path.join(build, page, "index.html");
  if (!fs.existsSync(file)) {
    missing.push(`${key}: /${page} has no page`);
    continue;
  }
  if (anchor && !fs.readFileSync(file, "utf8").includes(`id="${anchor}"`)) {
    missing.push(`${key}: /${page} has no #${anchor}`);
  }
}

if (missing.length) {
  for (const line of missing) console.error(`  ${line}`);
  process.exit(1);
}
console.log(`app links ok (${Object.keys(links).length})`);
