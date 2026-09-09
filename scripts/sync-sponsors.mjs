#!/usr/bin/env node
// Regenerates the sponsor block in every README from static/sponsors.json.
//
// Blocks are marked with <!-- SPONSORS:START --> / <!-- SPONSORS:END -->. A readme
// that has no markers yet gets them wrapped around its existing sponsor logos, so
// a new repo only needs a normal sponsor section to join in.
//
// Layouts:
//   local  repos sit next to Termix-Docs, addressed by "localDir" in sponsor-targets.json
//   ci     each repo is cloned into one dir, addressed by "repo" name (--root <dir> --by-repo)
//
// Usage:
//   node scripts/sync-sponsors.mjs [--check] [--root <dir>] [--by-repo]

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const docsRoot = resolve(here, '..');

const SITE = 'https://termix.site';
const START = '<!-- SPONSORS:START -->';
const END = '<!-- SPONSORS:END -->';

const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const BY_REPO = argv.includes('--by-repo');
const rootFlag = argv.indexOf('--root');
const ROOT = rootFlag === -1 ? resolve(docsRoot, '..') : resolve(argv[rootFlag + 1]);

const { sponsors } = JSON.parse(readFileSync(join(docsRoot, 'static/sponsors.json'), 'utf8'));
const { repos } = JSON.parse(readFileSync(join(here, 'sponsor-targets.json'), 'utf8'));

const block = [
  START,
  '',
  '<div align="center">',
  '',
  '<br />',
  '',
  sponsors
    .map(
      (s) =>
        `<a href="${s.href}">\n  <img src="${SITE}${s.logo}" height="40" alt="${s.name}" />\n</a>`,
    )
    .join('\n&nbsp;&nbsp;&nbsp;\n'),
  '',
  '</div>',
  '',
  END,
].join('\n');

// Wraps markers around the sponsor logos a readme already has, so we can adopt
// a readme that has never been synced without hand editing it first.
function addMarkers(text) {
  const anchor = text.indexOf(`<img src="${SITE}/img/sponsors/`);
  const legacy = text.search(/<a href="https?:\/\/(www\.)?digitalocean\.com\//);
  const at = anchor === -1 ? legacy : Math.min(anchor, legacy === -1 ? anchor : legacy);
  if (at === -1) return null;

  const open = text.lastIndexOf('<div align="center">', at);
  if (open === -1) return null;

  const close = text.indexOf('</div>', at);
  if (close === -1) return null;

  const region = text.slice(open, close);
  // Refuse anything with a nested div, we would swallow more than the logos.
  if (region.split('<div').length !== 2) return null;

  return text.slice(0, open) + START + '\n' + END + text.slice(close + '</div>'.length);
}

function targetPath(entry, file) {
  if (BY_REPO) return join(ROOT, entry.repo.replace('/', '__'), file);
  if (!entry.localDir) return null;
  return join(ROOT, entry.localDir, file);
}

let changed = 0;
let failed = 0;
const changedRepos = new Set();

for (const entry of repos) {
  for (const file of entry.files) {
    const path = targetPath(entry, file);
    const label = `${entry.repo}:${file}`;

    if (path === null) {
      console.log(`skip (not checked out locally): ${label}`);
      continue;
    }
    if (!existsSync(path)) {
      console.warn(`skip (not found): ${label}`);
      continue;
    }

    const original = readFileSync(path, 'utf8');
    let text = original;

    if (!text.includes(START)) {
      const marked = addMarkers(text);
      if (marked === null) {
        console.error(`FAIL no sponsor block found: ${label}`);
        failed++;
        continue;
      }
      text = marked;
    }

    const start = text.indexOf(START);
    const end = text.indexOf(END);
    if (start === -1 || end === -1 || end < start) {
      console.error(`FAIL broken markers: ${label}`);
      failed++;
      continue;
    }

    const updated = text.slice(0, start) + block + text.slice(end + END.length);

    if (updated === original) {
      console.log(`unchanged: ${label}`);
      continue;
    }

    changed++;
    changedRepos.add(entry.repo);
    if (CHECK) {
      console.error(`out of date: ${label}`);
    } else {
      writeFileSync(path, updated);
      console.log(`updated: ${label}`);
    }
  }
}

// Standalone section, kept for pasting anywhere that is not synced automatically.
// In CI it is written into the Docs clone so it rides along with that repo's commit,
// rather than racing a second push against the same branch.
const docsEntry = repos.find((r) => r.repo === 'Termix-SSH/Docs');
const sectionDir = BY_REPO ? join(ROOT, docsEntry.repo.replace('/', '__')) : docsRoot;
const sectionPath = join(sectionDir, 'sponsors-section.md');
const section = `## Sponsors

Interested in a paid placement to support development? Email [mail@termix.site](mailto:mail@termix.site).

${block}

<br />
`;

if (CHECK) {
  if (!existsSync(sectionPath) || readFileSync(sectionPath, 'utf8') !== section) {
    console.error('out of date: sponsors-section.md');
    changed++;
  }
} else if (!existsSync(sectionPath) || readFileSync(sectionPath, 'utf8') !== section) {
  writeFileSync(sectionPath, section);
  changedRepos.add('Termix-SSH/Docs');
  console.log('updated: sponsors-section.md');
}

// Let the workflow know which repos actually need a commit.
if (process.env.GITHUB_OUTPUT) {
  writeFileSync(
    process.env.GITHUB_OUTPUT,
    `changed_repos=${[...changedRepos].join(' ')}\nchanged_count=${changed}\n`,
    { flag: 'a' },
  );
}

if (failed > 0) {
  console.error(`\n${failed} file(s) could not be synced`);
  process.exit(1);
}

if (CHECK && changed > 0) {
  console.error(`\n${changed} file(s) out of date. Run: npm run sponsors:sync`);
  process.exit(1);
}

console.log(`\ndone, ${changed} file(s) ${CHECK ? 'out of date' : 'changed'}`);
