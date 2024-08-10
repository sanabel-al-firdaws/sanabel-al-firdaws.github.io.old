import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    answer: {
      render: component('./src/components/Answer.astro'),
    },
  
    question: {
      render: component('./src/components/Question.astro'),
        },

    // tabs: {
    //   render: component('./src/components/starlight/Tabs.astro'),
    //     },
    // tab: {
    //   render: component('./src/components/starlight/Tabitem.astro'),
    //   attributes: {
    //    label: {
    //     type: String
    //    }
    //   }
    // },
  },
});