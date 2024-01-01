import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from "@astrojs/markdoc";


import AstroPWA from "@vite-pwa/astro";
import type { ManifestOptions } from "vite-plugin-pwa";
import manifest from "./webmanifest.json";

// https://astro.build/config
export default defineConfig({
  site: 'https://sanabel-al-firdaws.github.io',
  // base: '/<project-name>',
  integrations: [  AstroPWA({
    mode: "production",
    registerType: "autoUpdate",
    includeAssets: ["favicon.svg"],
    workbox: {
      navigateFallback: "/404",
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,json}"],
    },
    experimental: {
      directoryAndTrailingSlashHandler: true,
    },
    manifest: manifest as Partial<ManifestOptions>,
  }),
    
    starlight({
    lastUpdated: true,
    tableOfContents:  { minHeadingLevel: 1, maxHeadingLevel: 6, },
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
    components: {
      // Override the default `SocialIcons` component.
      ThemeProvider : './src/components/ThemeProvider.astro',
    },
    title: 'سنابل الفردوس',
    description:'موقع يهتم بنشر العلم النافع',
    // titleDelimiter: '-',
    defaultLocale: 'ar',
    locales: {
      ar: {
        label: "العربية",
        lang: "ar",
        dir: 'rtl'
      },
      en: {
        label: "English",
        lang: "en",
        dir: 'ltr'
      }
    },
    editLink: {
      baseUrl: 'https://github.com/sanabel-al-firdaws/sanabel-al-firdaws.github.io/edit/main/',
    },
    social: {
      github: 'https://github.com/sanabel-al-firdaws/sanabel-al-firdaws.github.io/',
      gitlab: 'https://sanabel-al-firdaws.github.io'
    },
    sidebar: [
    
   
    {
      label: 'كتاب العقيدة',
      translations: {
        'en': 'The Book Of Aqida'
      },
      collapsed: true,
     
    	
    			items: [
            {
              label: 'مقدمة كتاب العقيدة',
              translations: {'en': 'Intro for the book of Aqida'},
              link: '/aqida/intro/'
            },
            {
              label: 'باب الإسلام',
              translations: {'en': 'Islam Chapter'},
              autogenerate: {directory: 'aqida/al-islam'},
  
            },
            {
              label: 'باب الإيمان',
              translations: {'en': 'Eman Chapter'},
              autogenerate: {directory: 'aqida/al-eman'},
  
            },
            {
              label: 'باب الإحسان',
              translations: {'en': 'Ehsan Chapter'},
              autogenerate: {directory: 'aqida/al-ehsan'},
  
            },
    			
    			]
    	  
      }
    // {
    // 	label: 'Reference',
    // 	collapsed: true,
    // 	autogenerate: { directory: 'reference' },
    // },
    // {
    // 	label: 'Testing',
    // 	collapsed: true,
    // 	autogenerate: { directory: 'test' },
    // },
    ]
  }), markdoc()]
});
