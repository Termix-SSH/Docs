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
            {
              type: 'category',
              label: 'Cloud',
              items: [
                'install/server/cloud/railway',
                {
                  type: 'link',
                  label: 'Cloudzy',
                  href: 'https://get.vast-melon.com/b?y=49ii4eh26osm6e9lcgrjadpp74sm8o9g60om8e1m75gj2d125gh748hq49k78t3gect2ubr3dhnnap3qf4n66rrd5tmm2sjbclq70r31cdiiut35e9mmiu1dedin4tj5e8h0====',
                },
              ],
            },
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
            'features/terminal/session-recording',
          ],
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
