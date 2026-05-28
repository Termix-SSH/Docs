import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from '@docusaurus/types/src/plugin';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Termix',
  tagline: 'Self-hosted SSH and remote desktop management.',
  favicon: 'img/favicon.ico',

  url: 'https://termix.site',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          termix: {
            specPath: 'static/openapi.json',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Termix-SSH/Docs/tree/main',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Termix',
      logo: {
        alt: 'Termix Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'GitHub',
          items: [
            {
              label: 'Termix',
              href: 'https://github.com/Termix-SSH/Termix',
            },
            {
              label: 'Mobile',
              href: 'https://github.com/Termix-SSH/Mobile',
            },
            {
              label: 'Docs',
              href: 'https://github.com/Termix-SSH/Docs',
            },
            {
              label: 'Support',
              href: 'https://github.com/Termix-SSH/Support',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Request Feature',
              href: 'https://github.com/Termix-SSH/Support/issues/new?template=feature_request.yml',
            },
            {
              label: 'Report Bug',
              href: 'https://github.com/Termix-SSH/Support/issues/new?template=bug_report.yml',
            },
            {
              label: 'eMail',
              href: 'mailto:mail@termix.site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Luke Gustafson. Termix is licensed under the Apache License, Version 2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
