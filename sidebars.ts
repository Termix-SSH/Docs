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
          items: ['install/server/docker', 'install/server/manual', 'install/server/proxmox'],
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
      items: ['reverse-proxy'],
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
          items: ['oidc', 'totp', 'rbac', 'security'],
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
