#!/usr/bin/env node
// Regenerates the sponsor block in every README from static/sponsors.json.
// Blocks are marked with <!-- SPONSORS:START --> / <!-- SPONSORS:END -->.
// Usage: node scripts/sync-sponsors.mjs [--check]

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const docsRoot = resolve(here, '..');
const projectsRoot = resolve(docsRoot, '..');

const SITE = 'https://termix.site';
const START = '<!-- SPONSORS:START -->';
const END = '<!-- SPONSORS:END -->';
const CHECK = process.argv.includes('--check');

// Repos that pull the block automatically. The GitHub org and personal
// profile readmes are not here, they get pasted from sponsors-section.md.
const TARGETS = [
  'Termix/README.md',
  'Termix/docs/readme/README-AR.md',
  'Termix/docs/readme/README-CN.md',
  'Termix/docs/readme/README-DE.md',
  'Termix/docs/readme/README-ES.md',
  'Termix/docs/readme/README-FR.md',
  'Termix/docs/readme/README-HI.md',
  'Termix/docs/readme/README-IT.md',
  'Termix/docs/readme/README-JA.md',
  'Termix/docs/readme/README-KO.md',
  'Termix/docs/readme/README-PT.md',
  'Termix/docs/readme/README-RU.md',
  'Termix/docs/readme/README-TR.md',
  'Termix/docs/readme/README-VI.md',
  'Termix-CLI/README.md',
  'Termix-Mobile/README.md',
  'Termix-Support/README.md',
  'Termix-Docs/README.md',
];

const { sponsors } = JSON.parse(readFileSync(join(docsRoot, 'static/sponsors.json'), 'utf8'));

function buildBlock() {
  const logos = sponsors
    .map(
      (s) =>
        `<a href="${s.href}">\n  <img src="${SITE}${s.logo}" height="40" alt="${s.name}" />\n</a>`,
    )
    .join('\n&nbsp;&nbsp;&nbsp;\n');

  return [START, '', '<div align="center">', '', '<br />', '', logos, '', '</div>', '', END].join(
    '\n',
  );
}

const block = buildBlock();
let changed = 0;
let missing = 0;

for (const rel of TARGETS) {
  const file = join(projectsRoot, rel);
  if (!existsSync(file)) {
    console.warn(`skip (not found): ${rel}`);
    continue;
  }

  const original = readFileSync(file, 'utf8');
  const start = original.indexOf(START);
  const end = original.indexOf(END);

  if (start === -1 || end === -1) {
    console.error(`no sponsor markers: ${rel}`);
    missing++;
    continue;
  }

  const updated = original.slice(0, start) + block + original.slice(end + END.length);

  if (updated === original) {
    console.log(`unchanged: ${rel}`);
    continue;
  }

  changed++;
  if (CHECK) {
    console.error(`out of date: ${rel}`);
  } else {
    writeFileSync(file, updated);
    console.log(`updated: ${rel}`);
  }
}

// Standalone section for the readmes that cannot pull automatically.
const sectionPath = join(docsRoot, 'sponsors-section.md');
const section = `## Sponsors

Interested in a paid placement to support development? Email [mail@termix.site](mailto:mail@termix.site).

${block}

<br />
`;

if (!CHECK) {
  writeFileSync(sectionPath, section);
  console.log('updated: Termix-Docs/sponsors-section.md');
} else if (!existsSync(sectionPath) || readFileSync(sectionPath, 'utf8') !== section) {
  console.error('out of date: Termix-Docs/sponsors-section.md');
  changed++;
}

if (missing > 0) {
  process.exit(1);
}

if (CHECK && changed > 0) {
  console.error(`\n${changed} file(s) out of date. Run: node scripts/sync-sponsors.mjs`);
  process.exit(1);
}

console.log(`\ndone, ${changed} file(s) ${CHECK ? 'out of date' : 'changed'}`);
