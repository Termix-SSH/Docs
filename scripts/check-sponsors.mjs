#!/usr/bin/env node
// Checks every sponsor link, and that each local logo file exists.
// The upstream "source" url is checked too so we notice when a sponsor
// moves their logo and our local copy goes stale.
// Usage: node scripts/check-sponsors.mjs

import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const docsRoot = resolve(here, '..');

const UA = 'Mozilla/5.0 (compatible; TermixSponsorCheck/1.0; +https://termix.site)';
const TIMEOUT = 20000;

// Statuses that mean "we were blocked", not "the link is dead".
const BOT_BLOCKED = new Set([401, 403, 429]);

const { sponsors } = JSON.parse(readFileSync(join(docsRoot, 'static/sponsors.json'), 'utf8'));

async function head(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    // Some CDNs reject HEAD, so fall back to a ranged GET.
    let res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'user-agent': UA },
      signal: controller.signal,
    });
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'user-agent': UA, range: 'bytes=0-1024' },
        signal: controller.signal,
      });
    }
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, status: err.name === 'AbortError' ? 'timeout' : err.message };
  } finally {
    clearTimeout(timer);
  }
}

const failures = [];
const warnings = [];

for (const s of sponsors) {
  const localPath = join(docsRoot, 'static', s.logo.replace(/^\//, ''));
  if (existsSync(localPath)) {
    console.log(`ok    logo file   ${s.name} -> ${s.logo}`);
  } else {
    console.error(`FAIL  logo file   ${s.name} -> ${s.logo} (missing)`);
    failures.push(`${s.name}: local logo missing at ${s.logo}`);
  }

  const site = await head(s.href);
  if (site.ok) {
    console.log(`ok    site        ${s.name} (${site.status})`);
  } else if (BOT_BLOCKED.has(site.status)) {
    // Bot protection, not a dead link. Akamai does this to every non browser client.
    console.warn(`WARN  site        ${s.name} (${site.status}, likely bot protection) ${s.href}`);
    warnings.push(`${s.name}: site returned ${site.status}, likely bot protection`);
  } else {
    console.error(`FAIL  site        ${s.name} (${site.status}) ${s.href}`);
    failures.push(`${s.name}: site returned ${site.status}`);
  }

  if (s.source) {
    const src = await head(s.source);
    if (src.ok) {
      console.log(`ok    logo source ${s.name} (${src.status})`);
    } else {
      // Not fatal, we serve our own copy. Worth knowing about though.
      console.warn(`WARN  logo source ${s.name} (${src.status}) ${s.source}`);
      warnings.push(`${s.name}: upstream logo returned ${src.status}`);
    }
  }
}

console.log('');
if (warnings.length) {
  console.log(`${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  - ${w}`);
}

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`all ${sponsors.length} sponsors ok`);
