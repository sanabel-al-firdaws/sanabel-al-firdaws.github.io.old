import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    ayah: {
      render: component('./src/components/Test.astro')
      // attributes: {
      //   // Markdoc requires type defs for each attribute.
      //   // These should mirror the `Props` type of the component
      //   // you are rendering.
      //   // See Markdoc's documentation on defining attributes
      //   // https://markdoc.dev/docs/attributes#defining-attributes
      //   type: { type: String },
      // },
    },
  },
});