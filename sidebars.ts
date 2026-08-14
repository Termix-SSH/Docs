import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import apiSidebarContent from './docs/api/sidebar';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: 'doc',
      id: 'api/termix-api',
    },
    ...apiSidebarContent.slice(1),
  ],
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'install',
      },
      items: [
        {
          type: 'category',
          label: 'Server',
          items: [
            'install/server/docker',
            'install/server/manual',
            'install/server/proxmox',
            'install/ginernet',
          ],
        },
        {
          type: 'category',
          label: 'Connector',
          items: [
            'install/connector/windows',
            'install/connector/linux',
            'install/connector/macos',
            'install/connector/ios',
            'install/connector/android',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/reverse-proxy',
        'setup/environment-variables',
        'setup/remote-desktop',
        'setup/remote-sync',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Authentication',
          link: {
            type: 'doc',
            id: 'features/authentication/overview',
          },
          items: [
            'features/authentication/sso-providers',
            'features/authentication/oidc',
            'features/authentication/github-google',
            'features/authentication/ldap',
            'features/authentication/trusted-proxy',
            'features/authentication/totp',
            'features/authentication/rbac',
            'features/authentication/security',
            'features/authentication/opkssh',
            'features/authentication/vault',
            'features/authentication/termix-id',
          ],
        },
        {
          type: 'category',
          label: 'Networking',
          items: [
            'features/networking/tunnels',
            'features/networking/host-metrics',
            'features/networking/alerts',
            'features/networking/docker',
            'features/networking/ssl',
            'features/networking/tailscale',
            'features/networking/port-knocking',
            'features/networking/wake-on-lan',
          ],
        },
        {
          type: 'category',
          label: 'Terminal',
          items: [
            'features/terminal/tmux',
            'features/terminal/command-palette',
            'features/terminal/snippets',
            'features/terminal/command-history',
            'features/terminal/split-screen',
            'features/terminal/session-sharing',
            'features/terminal/session-recording',
          ],
        },
        {
          type: 'category',
          label: 'Fleets',
          link: {
            type: 'doc',
            id: 'features/fleets/overview',
          },
          items: ['features/fleets/inventory'],
        },
        {
          type: 'category',
          label: 'Automations',
          link: {
            type: 'doc',
            id: 'features/automations/overview',
          },
          items: ['features/automations/triggers', 'features/automations/steps'],
        },
        {
          type: 'category',
          label: 'AI',
          link: {
            type: 'doc',
            id: 'features/ai/overview',
          },
          items: ['features/ai/providers', 'features/ai/tools'],
        },
        {
          type: 'category',
          label: 'Files & Hosts',
          items: [
            'features/files-and-hosts/proxmox-import',
            'features/files-and-hosts/credentials',
            'features/files-and-hosts/json-import',
          ],
        },
        {
          type: 'category',
          label: 'Dashboard',
          link: {
            type: 'doc',
            id: 'features/dashboard/overview',
          },
          items: ['features/dashboard/network-graph'],
        },
        {
          type: 'category',
          label: 'API',
          items: ['features/api/api-keys'],
        },
        {
          type: 'doc',
          id: 'features/workspaces',
          label: 'Workspaces',
        },
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      link: {
        type: 'doc',
        id: 'cli/overview',
      },
      items: [
        'cli/installation',
        'cli/authentication',
        'cli/configuration',
        'cli/scripting',
        {
          type: 'category',
          label: 'Commands',
          items: [
            'cli/commands/hosts',
            'cli/commands/exec-and-ssh',
            'cli/commands/files',
            'cli/commands/fleets',
            'cli/commands/tunnels-and-docker',
            'cli/commands/snippets-and-credentials',
            'cli/commands/admin',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'contributing',
      label: 'Contributing',
    },
    {
      type: 'doc',
      id: 'translations',
      label: 'Translations',
    },
  ],
};

export default sidebars;
