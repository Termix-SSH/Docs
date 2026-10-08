#!/usr/bin/env node
/**
 * Pulls everything the site does not keep by hand: every official plugin's
 * docs at each release, the plugin and core API specs, the env var list, the
 * plugin SDK reference and the app download list.
 *
 *   node scripts/sync-content.mjs                    from GitHub releases
 *   node scripts/sync-content.mjs --local ../Termix-Plugins --core ../Termix
 *
 * Options:
 *   --registry <path|url>  plugin index (default: the official registry)
 *   --local <dir>          read each plugin's latest docs from Plugin-* folders here
 *   --core <dir>           read core from a checkout instead of its latest release
 *   --sdk <dir>            plugin SDK folder with a built dist/ (default: --core's)
 *   --keep <n>             stable versions kept per plugin (default 5)
 *
 * Writes plugins/, api/ is left to gen-api-docs, static/openapi/, develop/reference/
 * and src/data/. GITHUB_TOKEN or GH_TOKEN is used when set.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as tar from "tar";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REGISTRY_URL =
  "https://raw.githubusercontent.com/Termix-SSH/Termix-Registry/main/official/index.json";
const CORE_REPO = "Termix-SSH/Termix";
const CACHE = path.join(ROOT, ".cache", "sources");
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";

const OUT = {
  plugins: path.join(ROOT, "plugins"),
  sidebars: path.join(ROOT, "sidebars-plugins.js"),
  openapi: path.join(ROOT, "static", "openapi"),
  data: path.join(ROOT, "src", "data"),
  develop: path.join(ROOT, "develop", "reference"),
};

function option(name, fallback = null) {
  const i = process.argv.indexOf(name);
  return i === -1 ? fallback : process.argv[i + 1];
}

const args = {
  registry: option("--registry", REGISTRY_URL),
  local: option("--local"),
  core: option("--core"),
  sdk: option("--sdk"),
  keep: Number(option("--keep", "5")),
};

// --- fetching -----------------------------------------------------------

async function get(url, accept = "application/json") {
  const headers = { Accept: accept, "User-Agent": "termix-docs-sync" };
  if (TOKEN && url.includes("api.github.com"))
    headers.Authorization = `Bearer ${TOKEN}`;
  const res = await fetch(url, { headers, redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

async function readJson(source) {
  if (/^https?:/.test(source)) return (await get(source)).json();
  return JSON.parse(fs.readFileSync(source, "utf8"));
}

/** Downloads and unpacks a repo at a ref, cached by repo and ref. */
async function fetchSource(repo, ref) {
  const dir = path.join(
    CACHE,
    repo.replace("/", "__"),
    ref.replace(/[\\/]/g, "_"),
  );
  if (fs.existsSync(path.join(dir, ".done"))) return dir;
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const res = await get(
    `https://codeload.github.com/${repo}/tar.gz/${ref}`,
    "application/gzip",
  );
  const file = path.join(
    os.tmpdir(),
    `termix-docs-${process.pid}-${Date.now()}.tgz`,
  );
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  await tar.x({ file, cwd: dir, strip: 1 });
  fs.rmSync(file, { force: true });
  fs.writeFileSync(path.join(dir, ".done"), "");
  return dir;
}

async function latestRelease(repo) {
  const res = await get(`https://api.github.com/repos/${repo}/releases/latest`);
  return res.json();
}

// --- small helpers ------------------------------------------------------

const read = (file) =>
  fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
const readJsonFile = (file) => {
  const text = read(file);
  return text ? JSON.parse(text) : null;
};

function write(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text.endsWith("\n") ? text : `${text}\n`);
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, to, { recursive: true });
}

function lookup(locale, key) {
  if (!key || !locale) return "";
  const value = key.split(".").reduce((node, part) => node?.[part], locale);
  return typeof value === "string" ? value : "";
}

const cell = (value) =>
  String(value ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ")
    .trim();

function table(head, rows) {
  if (rows.length === 0) return "";
  return [
    `| ${head.join(" | ")} |`,
    `| ${head.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
  ].join("\n");
}

function frontMatter(data) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined) continue;
    lines.push(`${key}: ${JSON.stringify(value)}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

/** Splits "---\n...\n---" front matter off a markdown file. */
function parseMarkdown(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) return { data: {}, body: text };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!m) continue;
    let value = m[2].trim();
    if (/^".*"$|^'.*'$/.test(value)) value = value.slice(1, -1);
    else if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
    data[m[1]] = value;
  }
  return { data, body: text.slice(match[0].length) };
}

function semverParts(v) {
  const [core, pre] = String(v).split("-");
  return { nums: core.split(".").map(Number), pre: pre ?? null };
}

function compareVersions(a, b) {
  const pa = semverParts(a);
  const pb = semverParts(b);
  for (let i = 0; i < 3; i++) {
    if ((pa.nums[i] ?? 0) !== (pb.nums[i] ?? 0))
      return (pa.nums[i] ?? 0) - (pb.nums[i] ?? 0);
  }
  if (pa.pre === pb.pre) return 0;
  if (!pa.pre) return 1;
  if (!pb.pre) return -1;
  return pa.pre.localeCompare(pb.pre, undefined, { numeric: true });
}

// --- SDK ----------------------------------------------------------------

let sdkRoot = null;
async function sdk(name) {
  if (sdkRoot) {
    const file = path.join(sdkRoot, "dist", `${name}.js`);
    if (!fs.existsSync(file))
      throw new Error(
        `${file} is missing. Build the SDK first (npm run build:sdk in core).`,
      );
    return import(pathToFileURL(file).href);
  }
  return import(`@termix-ssh/plugin-sdk/${name}`);
}

/**
 * The API pages are MDX, where a bare <id> in a description is read as a tag.
 * Words with angle brackets become inline code, which reads better anyway.
 */
function mdxSafeSpec(spec) {
  const fix = (text) =>
    text
      .split(/(`[^`]*`)/)
      .map((part, i) =>
        i % 2 === 1 ? part : part.replace(/(\S*<[^<>\s]+>\S*)/g, "`$1`"),
      )
      .join("");
  const walk = (node) => {
    if (Array.isArray(node)) return node.map(walk);
    if (!node || typeof node !== "object") return node;
    const out = {};
    for (const [key, value] of Object.entries(node)) {
      out[key] =
        (key === "description" || key === "summary") &&
        typeof value === "string"
          ? fix(value)
          : walk(value);
    }
    return out;
  };
  return walk(spec);
}

function writeSpec(file, spec) {
  write(file, JSON.stringify(mdxSafeSpec(spec), null, 2));
}

// --- core ---------------------------------------------------------------

const RISK_LABEL = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

/** Reads CAPABILITY_CATALOG entries without running TypeScript. */
function readCapabilities(coreDir, coreLocale) {
  const text =
    read(path.join(coreDir, "packages/plugin-sdk/src/capabilities.ts")) ?? "";
  const list = [];
  for (const m of text.matchAll(
    /entry\("([a-z]+:[a-z-]+)",\s*"(critical|high|medium|low)"\)/g,
  )) {
    list.push({
      id: m[1],
      risk: m[2],
      title: lookup(coreLocale, `plugins.capabilities.${m[1]}.title`),
      consequence: lookup(
        coreLocale,
        `plugins.capabilities.${m[1]}.consequence`,
      ),
    });
  }
  return list;
}

async function syncCore() {
  let dir = args.core ? path.resolve(args.core) : null;
  let version = null;
  if (!dir) {
    const release = await latestRelease(CORE_REPO);
    version = release.tag_name.replace(/^v/, "");
    dir = await fetchSource(CORE_REPO, release.tag_name);
  }
  const pkg = readJsonFile(path.join(dir, "package.json"));
  version ??= pkg?.version ?? "0.0.0";
  sdkRoot ??= args.sdk
    ? path.resolve(args.sdk)
    : args.core
      ? path.join(dir, "packages", "plugin-sdk")
      : null;

  const locale = readJsonFile(path.join(dir, "src/ui/locales/en.json")) ?? {};
  const capabilities = readCapabilities(dir, locale);
  const env = readJsonFile(path.join(dir, "env.catalog.json"));
  const tags = readJsonFile(
    path.join(dir, "src/backend/utils/openapi-tags.json"),
  );
  const links = readJsonFile(path.join(dir, "src/ui/lib/docs-pages.json"));
  const schema = readJsonFile(
    path.join(dir, "packages/plugin-sdk/schema/manifest.schema.json"),
  );
  const sdkChangelog = read(path.join(dir, "packages/plugin-sdk/CHANGELOG.md"));

  // A release from before the docs rebuild has none of these, so the last
  // good copy stays.
  if (!env || !tags) {
    console.warn(
      `core ${version} has no env catalog or API tags, keeping the old copies`,
    );
  } else {
    const { buildOpenApi } = await sdk("openapi");
    const spec = await buildOpenApi({
      title: "Termix API",
      version,
      description: "The core Termix API. Each plugin documents its own routes.",
      files: [path.join(dir, "src/backend/**/!(*.test).ts")],
      tags,
    });
    writeSpec(path.join(OUT.openapi, "core.json"), spec);
  }

  if (links)
    write(
      path.join(OUT.data, "app-links.json"),
      JSON.stringify(links, null, 2),
    );
  if (capabilities.length)
    write(
      path.join(OUT.data, "capabilities.json"),
      JSON.stringify(capabilities, null, 2),
    );
  if (schema) writeManifestReference(schema);
  if (capabilities.length) writeCapabilityReference(capabilities);
  if (sdkChangelog) writeSdkChangelog(sdkChangelog);

  return { version, env, capabilities };
}

function writeManifestReference(schema) {
  const props = schema.properties ?? {};
  const required = new Set(schema.required ?? []);
  const rows = Object.entries(props).map(([name, def]) => [
    `\`${name}\``,
    required.has(name) ? "yes" : "",
    def.type ?? (def.enum ? "string" : "object"),
    def.description ?? "",
  ]);
  const contributes = props.contributes?.properties ?? {};
  const contribRows = Object.entries(contributes).map(([name, def]) => [
    `\`${name}\``,
    def.description ?? "",
  ]);
  const categories = props.category?.enum ?? [];
  write(
    path.join(OUT.develop, "manifest.md"),
    frontMatter({
      title: "Manifest fields",
      sidebar_position: 1,
      description: "Every field manifest.json can have.",
    }) +
      [
        "This page is made from `manifest.schema.json` in the plugin SDK. Point your editor at it to get the same checks while you type:",
        "",
        "```json",
        '{ "$schema": "./node_modules/@termix-ssh/plugin-sdk/schema/manifest.schema.json" }',
        "```",
        "",
        "## Top level",
        "",
        table(["Field", "Required", "Type", "What it is"], rows),
        "",
        "## contributes",
        "",
        table(["Field", "What it adds"], contribRows),
        "",
        categories.length
          ? "## Categories\n\n" + categories.map((c) => `- ${c}`).join("\n")
          : "",
        "",
      ].join("\n"),
  );
}

function writeCapabilityReference(capabilities) {
  const order = ["critical", "high", "medium", "low"];
  const parts = [
    frontMatter({
      title: "Capabilities",
      sidebar_position: 2,
      description: "Every capability a plugin can ask for.",
    }),
    "A capability is something a plugin's code may do. List what you need in `capabilities` in `manifest.json`. People see this list before they install your plugin, worst first. The SDK method that needs a capability throws if the manifest does not list it.",
    "",
    "Capabilities are not user permissions. A capability says what the plugin's code can reach. A permission says which users can use a feature.",
    "",
  ];
  for (const risk of order) {
    const rows = capabilities
      .filter((c) => c.risk === risk)
      .map((c) => [`\`${c.id}\``, c.title, c.consequence]);
    if (!rows.length) continue;
    parts.push(
      `## ${RISK_LABEL[risk]}`,
      "",
      table(["Capability", "Shown as", "What it means"], rows),
      "",
    );
  }
  write(path.join(OUT.develop, "capabilities.md"), parts.join("\n"));
}

function writeSdkChangelog(text) {
  const body = text.replace(/^# .*\r?\n/, "").trim();
  write(
    path.join(OUT.develop, "sdk-changelog.md"),
    frontMatter({ title: "SDK changelog", sidebar_position: 9 }) +
      "Changes to `@termix-ssh/plugin-sdk`. A release that bumps the plugin API says so at the top.\n\n" +
      body.replace(/^## /gm, "## ") +
      "\n",
  );
}

// --- app downloads ------------------------------------------------------

async function syncReleases() {
  try {
    const release = await latestRelease(CORE_REPO);
    write(
      path.join(OUT.data, "releases.json"),
      JSON.stringify(
        {
          tag: release.tag_name,
          url: release.html_url,
          publishedAt: release.published_at,
          assets: release.assets.map((a) => ({
            name: a.name,
            url: a.browser_download_url,
            size: a.size,
          })),
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.warn(`could not read the latest core release: ${error.message}`);
  }
}

// --- plugins ------------------------------------------------------------

function localPluginDir(repository) {
  if (!args.local || !repository) return null;
  const name = repository.split("/").pop();
  const dir = path.resolve(args.local, name);
  return fs.existsSync(path.join(dir, "manifest.json")) ? dir : null;
}

async function pluginSource(plugin, version, latest) {
  if (latest) {
    const local = localPluginDir(plugin.repository);
    if (local) return { dir: local, ref: "local" };
  }
  const repo = plugin.repository.replace("https://github.com/", "");
  const dir = await fetchSource(repo, `refs/tags/v${version}`);
  if (fs.existsSync(path.join(dir, "docs", "index.md")) || !latest)
    return { dir, ref: `v${version}` };
  // Releases from before the docs folder existed fall back to the default
  // branch, so the latest version still gets its page.
  return { dir: await fetchSource(repo, "HEAD"), ref: "HEAD" };
}

function settingRows(fields, locale) {
  return (fields ?? [])
    .filter((f) => !f.hidden && f.type !== "custom")
    .map((f) => [
      lookup(locale, f.labelKey) || f.key,
      f.type,
      f.default === undefined || f.default === ""
        ? ""
        : `\`${JSON.stringify(f.default)}\``,
      lookup(locale, f.descriptionKey),
    ]);
}

function referencePage(manifest, locale, capabilities, routeBase, apiLink) {
  const parts = [];
  const settings = manifest.contributes?.settings ?? {};
  const head = ["Setting", "Type", "Default", "What it does"];
  const scopes = [
    [
      "Admin",
      settings.admin,
      "Set by an admin in **Settings**, under the plugin's name. It applies to everyone.",
    ],
    [
      "User",
      settings.user,
      "Each person sets these for themselves in **Settings**.",
    ],
  ];
  const settingParts = [];
  for (const [label, fields, intro] of scopes) {
    const rows = settingRows(fields, locale);
    if (rows.length)
      settingParts.push(`### ${label}`, "", intro, "", table(head, rows), "");
  }
  if (settings.host) {
    const rows = settingRows(settings.host.fields, locale);
    if (settings.host.enableKey) {
      rows.unshift([
        lookup(locale, settings.host.enableLabelKey) || settings.host.enableKey,
        "boolean",
        `\`${settings.host.enableDefault ? "true" : "false"}\``,
        lookup(locale, settings.host.enableDescriptionKey),
      ]);
    }
    if (rows.length)
      settingParts.push(
        "### Host",
        "",
        "Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.",
        "",
        table(head, rows),
        "",
      );
  }
  if (settingParts.length) parts.push("## Settings", "", ...settingParts);

  const env = manifest.env ?? [];
  if (env.length) {
    parts.push(
      "## Environment variables",
      "",
      "Set these on the Termix server, for example under `environment:` in your compose file.",
      "",
      table(
        ["Variable", "Default", "What it does"],
        env.map((v) => [
          `\`${v.name}\`${v.required ? " (required)" : ""}`,
          v.default ? `\`${v.default}\`` : "",
          v.description,
        ]),
      ),
      "",
    );
  }

  const permissions = manifest.contributes?.permissions ?? [];
  if (permissions.length) {
    parts.push(
      "## Permissions",
      "",
      "Give these to roles in **Settings**, **Roles**.",
      "",
      table(
        ["Permission", "Who has it at first", "What it allows"],
        permissions.map((p) => [
          `\`${manifest.id}.${p.name}\``,
          (p.defaultRoles ?? []).join(", ") || "nobody",
          lookup(locale, p.descriptionKey) || lookup(locale, p.titleKey),
        ]),
      ),
      "",
    );
  }

  const caps = manifest.capabilities ?? [];
  if (caps.length) {
    const byId = new Map(capabilities.map((c) => [c.id, c]));
    const order = ["critical", "high", "medium", "low"];
    const sorted = [...caps].sort(
      (a, b) =>
        order.indexOf(byId.get(a)?.risk) - order.indexOf(byId.get(b)?.risk),
    );
    parts.push(
      "## Capabilities",
      "",
      "What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.",
      "",
      table(
        ["Capability", "Risk", "What it means"],
        sorted.map((id) => {
          const c = byId.get(id);
          return [
            `\`${id}\``,
            c ? RISK_LABEL[c.risk] : "",
            c ? `${c.title}. ${c.consequence}` : "",
          ];
        }),
      ),
      "",
    );
  }

  const deps = Object.entries(manifest.dependencies ?? {});
  const optional = Object.entries(manifest.optionalDependencies ?? {});
  if (deps.length || optional.length) {
    const link = (id) => `[${id}](/plugins/${id})`;
    parts.push("## Works with other plugins", "");
    if (deps.length)
      parts.push(
        `Needs: ${deps.map(([id, r]) => `${link(id)} ${r}`).join(", ")}.`,
        "",
      );
    if (optional.length)
      parts.push(
        `Works better with: ${optional.map(([id, r]) => `${link(id)} ${r}`).join(", ")}.`,
        "",
      );
  }

  const provides = manifest.provides ?? [];
  const requires = manifest.requires ?? [];
  if (provides.length || requires.length) {
    parts.push(
      "## Services",
      "",
      "Services are how plugins call each other. Plugin authors can use these.",
      "",
    );
    if (provides.length)
      parts.push(
        table(
          ["Provides", "Version", "Permission"],
          provides.map((s) => [
            `\`${s.service}\`${s.names?.length ? ` (${s.names.join(", ")})` : ""}`,
            s.version,
            `\`${s.permission}\``,
          ]),
        ),
        "",
      );
    if (requires.length)
      parts.push(
        table(
          ["Uses", "Version", "Optional"],
          requires.map((s) => [
            `\`${s.service}\``,
            s.versionRange,
            s.optional ? "yes" : "no",
          ]),
        ),
        "",
      );
  }

  if (apiLink) {
    parts.push(
      "## API",
      "",
      `The plugin's HTTP routes are in the [API reference](${apiLink}).`,
      "",
    );
  }

  if (manifest.platforms?.length) {
    const names = { linux: "Linux", win32: "Windows", darwin: "macOS" };
    parts.push(
      "## Platforms",
      "",
      manifest.platforms.map((p) => names[p] ?? p).join(", "),
      "",
    );
  }

  if (!parts.length)
    parts.push(
      "This plugin has no settings, permissions or environment variables.",
    );
  return parts.join("\n");
}

/** Where gen-api-docs puts a spec's overview page, from its title. */
function apiPath(id, title) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `/api/${id}/${slug}`;
}

function editUrl(plugin, ref, file) {
  if (ref === "local" || ref === "HEAD")
    return `${plugin.repository}/edit/main/${file}`;
  return null;
}

async function syncPlugin(plugin, capabilities) {
  const stable = [...(plugin.versions ?? [])]
    .map((v) => v.version)
    .sort(compareVersions)
    .reverse()
    .slice(0, args.keep);
  const beta = [...(plugin.prereleases ?? [])]
    .map((v) => v.version)
    .sort(compareVersions)
    .reverse()[0];
  const latest = stable[0] ?? beta;
  if (!latest) return null;
  const versions = [...stable];
  if (beta && compareVersions(beta, latest) > 0) versions.push(beta);

  const outRoot = path.join(OUT.plugins, plugin.id);
  const versionInfo = [];
  let hasApi = false;
  let apiLink = null;
  let latestManifest = null;

  for (const version of versions) {
    const isLatest = version === latest;
    let source;
    try {
      source = await pluginSource(plugin, version, isLatest);
    } catch (error) {
      console.warn(`  ${plugin.id} ${version}: ${error.message}`);
      continue;
    }
    const docsDir = path.join(source.dir, "docs");
    if (!isLatest && !fs.existsSync(path.join(docsDir, "index.md"))) continue;

    const manifest = readJsonFile(path.join(source.dir, "manifest.json"));
    if (!manifest) continue;
    const locale =
      readJsonFile(path.join(source.dir, "locales", "en.json")) ?? {};
    const dir = isLatest
      ? outRoot
      : path.join(OUT.plugins, "versions", plugin.id, version);
    const slug = isLatest ? `/${plugin.id}` : `/${plugin.id}/v/${version}`;
    const meta = {
      plugin_id: plugin.id,
      plugin_version: version,
      plugin_latest: isLatest,
    };

    let apiSpec = false;
    if (isLatest) {
      const { buildOpenApi, hasOpenApiPaths } = await sdk("openapi");
      const spec = await buildOpenApi({
        title: `${manifest.name} API`,
        version: manifest.version,
        description: manifest.description,
        files: [
          path.join(
            source.dir,
            "src",
            "backend",
            "**",
            "!(*.test).{ts,tsx,js,mjs}",
          ),
        ],
      });
      if (hasOpenApiPaths(spec)) {
        writeSpec(path.join(OUT.openapi, "plugins", `${plugin.id}.json`), spec);
        apiSpec = true;
        hasApi = true;
        apiLink = apiPath(plugin.id, `${manifest.name} API`);
      }
    }

    const index = read(path.join(docsDir, "index.md"));
    const parsed = index ? parseMarkdown(index) : null;
    write(
      path.join(dir, "index.md"),
      frontMatter({
        title: manifest.name,
        sidebar_label: "Overview",
        sidebar_position: 0,
        slug,
        description: manifest.description,
        hide_title: true,
        custom_edit_url: index
          ? editUrl(plugin, source.ref, "docs/index.md")
          : null,
        ...meta,
      }) +
        (parsed?.body.trim() ||
          `${manifest.description}\n\nThis plugin has no docs page yet. See its [repository](${plugin.repository}).`) +
        "\n",
    );

    if (fs.existsSync(docsDir)) {
      for (const name of fs.readdirSync(docsDir)) {
        const full = path.join(docsDir, name);
        if (name === "index.md") continue;
        if (fs.statSync(full).isDirectory()) {
          copyDir(full, path.join(dir, name));
          continue;
        }
        if (!/\.md$/.test(name)) continue;
        const { data, body } = parseMarkdown(read(full));
        const page = name.replace(/\.md$/, "");
        write(
          path.join(dir, name),
          frontMatter({
            title: data.title ?? page.replace(/-/g, " "),
            sidebar_position: 10 + (Number(data.order) || 50),
            slug: `${slug}/${page}`,
            description: data.description,
            custom_edit_url: editUrl(plugin, source.ref, `docs/${name}`),
            ...meta,
          }) +
            body.trim() +
            "\n",
        );
      }
    }

    write(
      path.join(dir, "reference.md"),
      frontMatter({
        title: "Reference",
        sidebar_label: "Reference",
        sidebar_position: 90,
        slug: `${slug}/reference`,
        custom_edit_url: null,
        ...meta,
      }) +
        referencePage(
          manifest,
          locale,
          capabilities,
          slug,
          apiSpec ? apiLink : null,
        ) +
        "\n",
    );

    const changelog = read(path.join(source.dir, "CHANGELOG.md"));
    if (changelog) {
      write(
        path.join(dir, "changelog.md"),
        frontMatter({
          title: "Changelog",
          sidebar_label: "Changelog",
          sidebar_position: 99,
          slug: `${slug}/changelog`,
          custom_edit_url: null,
          toc_max_heading_level: 2,
          ...meta,
        }) +
          changelog.replace(/^# .*\r?\n/, "").trim() +
          "\n",
      );
    }

    const entry = [
      ...(plugin.versions ?? []),
      ...(plugin.prereleases ?? []),
    ].find((v) => v.version === version);
    if (isLatest) latestManifest = manifest;
    versionInfo.push({
      version,
      latest: isLatest,
      prerelease: version.includes("-"),
      publishedAt: entry?.publishedAt ?? null,
      features: manifest.features ?? [],
      capabilities: manifest.capabilities ?? [],
      env: manifest.env ?? [],
    });
    console.log(`  ${plugin.id} ${version} (${source.ref})`);
  }

  if (!versionInfo.length) return null;
  const top = versionInfo.find((v) => v.latest) ?? versionInfo[0];
  return {
    id: plugin.id,
    name: latestManifest?.name ?? plugin.name,
    description: latestManifest?.description ?? plugin.description,
    category: latestManifest?.category ?? plugin.category,
    icon: latestManifest?.icon ?? plugin.icon ?? "Puzzle",
    author: plugin.author,
    repository: plugin.repository,
    docs: plugin.docs ?? `https://docs.termix.site/plugins/${plugin.id}`,
    latest: top.version,
    features: top.features,
    capabilities: top.capabilities,
    env: top.env,
    dependencies: plugin.versions?.[0]?.dependencies ?? {},
    hasApi,
    apiPath: apiLink,
    versions: versionInfo.map(
      ({ version, latest: l, prerelease, publishedAt }) => ({
        version,
        latest: l,
        prerelease,
        publishedAt,
      }),
    ),
  };
}

/** One sidebar per plugin version, made from the pages written for it. */
function writeSidebars(plugins) {
  const sidebars = {};
  for (const p of plugins) {
    for (const v of p.versions) {
      const base = v.latest ? p.id : `versions/${p.id}/${v.version}`;
      const items = [
        { type: "link", label: "All plugins", href: "/plugins" },
        { type: "autogenerated", dirName: base },
      ];
      if (v.latest && p.hasApi) {
        items.push({ type: "link", label: "API reference", href: p.apiPath });
      }
      sidebars[sidebarId(p.id, v.version, v.latest)] = items;
    }
  }
  write(
    OUT.sidebars,
    `// Made by scripts/sync-content.mjs. Do not edit.\nmodule.exports = ${JSON.stringify(sidebars, null, 2)};\n`,
  );
}

function sidebarId(id, version, latest) {
  return latest
    ? `plugin-${id}`
    : `plugin-${id}-${version.replace(/\./g, "_")}`;
}

function writeEnv(core, plugins) {
  const vars = (core.env?.vars ?? []).filter((v) => !v.internal);
  const out = {
    groups: core.env?.groups ?? {},
    core: vars,
    plugins: plugins
      .filter((p) => p.env.length)
      .map((p) => ({ id: p.id, name: p.name, vars: p.env })),
  };
  if (core.env)
    write(path.join(OUT.data, "env.json"), JSON.stringify(out, null, 2));
}

/** Imports only the Lucide icons plugins use, so the site does not ship all of them. */
async function writeIcons(plugins) {
  const lucide = await import("lucide-react");
  const known = new Set(Object.keys(lucide.icons ?? {}));
  const names = [...new Set(["Puzzle", ...plugins.map((p) => p.icon)])]
    .filter((name) => /^[A-Z][A-Za-z0-9]*$/.test(name) && known.has(name))
    .sort();
  write(
    path.join(OUT.data, "plugin-icons.ts"),
    [
      "// Made by scripts/sync-content.mjs. Do not edit.",
      `import { ${names.join(", ")} } from "lucide-react";`,
      "",
      `export const PLUGIN_ICONS = { ${names.join(", ")} };`,
      "",
    ].join("\n"),
  );
}

async function main() {
  console.log("core");
  const core = await syncCore();
  await syncReleases();

  console.log("plugins");
  const index = await readJson(args.registry);
  fs.rmSync(OUT.plugins, { recursive: true, force: true });
  fs.rmSync(path.join(OUT.openapi, "plugins"), {
    recursive: true,
    force: true,
  });

  const plugins = [];
  for (const plugin of index.plugins) {
    const result = await syncPlugin(plugin, core.capabilities);
    if (result) plugins.push(result);
  }
  plugins.sort((a, b) => a.name.localeCompare(b.name));

  write(
    path.join(OUT.plugins, "index.md"),
    frontMatter({
      title: "Plugins",
      slug: "/",
      hide_title: true,
      hide_table_of_contents: true,
      custom_edit_url: null,
      catalog: true,
    }) + "Every official Termix plugin.\n",
  );
  writeSidebars(plugins);
  write(path.join(OUT.data, "plugins.json"), JSON.stringify(plugins, null, 2));
  write(
    path.join(OUT.data, "api-specs.json"),
    JSON.stringify(
      plugins.filter((p) => p.hasApi).map((p) => ({ id: p.id, name: p.name })),
      null,
      2,
    ),
  );
  writeEnv(core, plugins);
  await writeIcons(plugins);
  console.log(`done: ${plugins.length} plugins`);
}

await main();
