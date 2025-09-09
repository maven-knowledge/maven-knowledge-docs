import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'authentication',
    {
      type: 'category',
      label: 'Arrivals',
      collapsible: true,
      collapsed: true,
      items: [
        'arrivals/arrivals-api',
        'arrivals/arrivals-columns',
        'arrivals/arrivals-code-example',
      ],
    },
    {
      type: 'category',
      label: 'Arb Crude',
      collapsible: true,
      collapsed: true,
      items: [
        'arb_crude/arb_crude-api',
        'arb_crude/arb_crude-columns',
        'arb_crude/arb_crude-code-example',
      ],
    },
    {
      type: 'category',
      label: 'Arb Fuel Oil+',
      collapsible: true,
      collapsed: true,
      items: [
        'arb_fuel/arb_fuel-api',
        'arb_fuel/arb_fuel-columns',
        'arb_fuel/arb_fuel-code-example',
      ],
    },
    'queries',
    'pagination',
    'error-handling',
    'support',
  ],
};

export default sidebars;

