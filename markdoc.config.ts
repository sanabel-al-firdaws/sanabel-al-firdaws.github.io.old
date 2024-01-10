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
    hadith: {
      render: component('./src/components/Hadith.astro'),
      attributes: {
        id: {
          type: String
        },
      }
    },
    hadithgroup: {
      render: component('./src/components/HadithGroup.astro'),

    },
    ayah: {
      render: component('./src/components/Ayah.astro'),
      attributes: {
        v: {
          type: Number
        },
        s: {
          type: Number
        }
        
      }
    },
    greet: {
      render: component('./src/components/lit/my-element-client.astro'),
      attributes: {
        name: {
          type: String
        },
      }
    }
  },
});