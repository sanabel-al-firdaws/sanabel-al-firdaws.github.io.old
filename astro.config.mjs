import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: 'https://sanabel-al-firdaws.github.io',
  // base: '/<project-name>',
  integrations: [starlight({
    title: 'سنابل الفردوس',
    description:'موقع يهتم بنشر العلم النافع',
    titleDelimiter: '-',
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
      github: 'https://github.com/sanabel-al-firdaws/sanabel-al-firdaws.github.io/'
    },
    sidebar: [
    //{
    // label: 'Guides',
    // items: [
    //   { label: 'Components', link: '/guides/components/' },
    //   { label: 'Internationalization (i18n)', link: '/guides/i18n/' },
    //   // A nested group of links.
    //   {
    // 	label: 'Styling',
    // 	items: [

    // 		{
    // 			label: 'Styling2',
    // 			items: [
    // 			  { label: 'CSS', link: '/guides/css-and-tailwind/' },
    // 			  { label: 'Tailwind', link: '/guides/css-and-tailwind/' },
    // 				{ label: 'Shiki', link: '/guides/css-and-tailwind/' },
    // 			]
    // 	  }
    // 	],
    //   },
    // ],
    //},
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

              items: [
                {
                  label: 'مقدمة باب الإسلام',
                  link: '/aqida/al-islam/intro/',
                  translations: {'en': 'Intro for Islam Chapter'},
                },
             
              ]
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