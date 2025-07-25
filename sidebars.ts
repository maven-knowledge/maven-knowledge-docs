import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'authentication',
    {
      type: 'category',
      label: 'Arrivals',
      collapsible: true,
      collapsed: false,
      items: [
        'arrivals/arrivals-api',
        'arrivals/arrivals-columns',
        'arrivals/arrivals-code-example',
      ],
    },
    'queries',
    'pagination',
    'error-handling',
    'support',
  ],
};

export default sidebars;

