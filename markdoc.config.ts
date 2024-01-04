import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    themechange:{
      render: component('./src/components/ThemeChange.astro'),
    },
    tab: {
      render: component('./node_modules/@astrojs/starlight/user-components/TabItem.astro'),
      attributes: {
        label: {
          type: String
        }
      }
    },
    tabs: {
      render: component('./node_modules/@astrojs/starlight/user-components/Tabs.astro'),
    },
    ayah: {
      render: component('./src/components/Test.astro'),

    },
  },
});