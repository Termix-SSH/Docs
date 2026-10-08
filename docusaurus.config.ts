import fs from "node:fs";
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { redirects } from "./redirects";

// Written by scripts/sync-content.mjs.
const apiSpecs: { id: string; name: string }[] = fs.existsSync(
  "./src/data/api-specs.json",
)
  ? JSON.parse(fs.readFileSync("./src/data/api-specs.json", "utf8"))
  : [];

const openApiConfig: Record<string, OpenApiPlugin.Options> = {
  core: {
    specPath: "static/openapi/core.json",
    outputDir: "api/core",
    sidebarOptions: { groupPathsBy: "tag" },
  },
};
for (const spec of apiSpecs) {
  openApiConfig[spec.id] = {
    specPath: `static/openapi/plugins/${spec.id}.json`,
    outputDir: `api/${spec.id}`,
    sidebarOptions: { groupPathsBy: "tag" },
  };
}

const config: Config = {
  title: "Termix",
  tagline: "Self-hosted, plugin-based server management.",
  favicon: "img/favicon.ico",

  url: "https://docs.termix.site",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",

  markdown: {
    // .md is plain markdown, so plugin docs pulled from other repos can not
    // run code here. Pages that need components are .mdx.
    format: "detect",
    hooks: { onBrokenMarkdownLinks: "throw" },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "develop",
        path: "develop",
        routeBasePath: "develop",
        sidebarPath: "./sidebars-develop.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "plugins",
        path: "plugins",
        routeBasePath: "plugins",
        sidebarPath: "./sidebars-plugins.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./sidebars-api.ts",
        docItemComponent: "@theme/ApiItem",
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "api",
        config: openApiConfig,
      },
    ],
    ["@docusaurus/plugin-client-redirects", { redirects }],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/Termix-SSH/Docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: ["/", "develop", "plugins"],
        docsPluginIdForPreferredVersion: undefined,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        ignoreFiles: [/^api\//, /\/v\/\d/],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: false, autoCollapseCategories: true },
    },
    navbar: {
      title: "Termix",
      logo: {
        alt: "Termix",
        src: "img/logo.svg",
        href: "https://termix.site",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { to: "/plugins", position: "left", label: "Plugins" },
        {
          type: "docSidebar",
          sidebarId: "develop",
          docsPluginId: "develop",
          position: "left",
          label: "Develop",
        },
        {
          type: "docSidebar",
          sidebarId: "api",
          docsPluginId: "api",
          position: "left",
          label: "API",
        },
        {
          type: "docSidebar",
          sidebarId: "cli",
          position: "left",
          label: "CLI",
        },
        { type: "search", position: "right" },
        {
          href: "https://github.com/Termix-SSH/Termix",
          position: "right",
          className: "navbar-github-link",
          "aria-label": "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Install", to: "/install" },
            { label: "Plugins", to: "/plugins" },
            { label: "Build a plugin", to: "/develop" },
            { label: "API", to: "/api" },
          ],
        },
        {
          title: "Code",
          items: [
            { label: "Termix", href: "https://github.com/Termix-SSH/Termix" },
            { label: "Mobile", href: "https://github.com/Termix-SSH/Mobile" },
            { label: "CLI", href: "https://github.com/Termix-SSH/CLI" },
            {
              label: "Plugin registry",
              href: "https://github.com/Termix-SSH/Termix-Registry",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "Report a bug",
              href: "https://github.com/Termix-SSH/Termix/issues/new/choose",
            },
            { label: "Discord", href: "https://discord.gg/jVQGdvHDrf" },
            { label: "Email", href: "mailto:mail@termix.site" },
            { label: "Donate", to: "/donate" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Luke Gustafson. Termix is licensed under the Apache License, Version 2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        "bash",
        "yaml",
        "nginx",
        "json",
        "ini",
        "powershell",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
