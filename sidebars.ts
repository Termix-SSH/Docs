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
      items: ['reverse-proxy', 'environment-variables', 'remote-desktop'],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features',
      },
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: ['oidc', 'totp', 'rbac', 'security', 'opkssh'],
        },
        {
          type: 'category',
          label: 'Networking',
          items: ['tunnels', 'server-stats', 'docker', 'ssl'],
        },
        {
          type: 'category',
          label: 'Data',
          items: ['json-import'],
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
