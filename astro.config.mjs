import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sanabel-al-firdaws.github.io',
	// base: '/<project-name>',
	integrations: [
		starlight({
			title: 'سنابل الفردوس',
			
			defaultLocale: 'ar',

			locales: {
				ar: {
					label: "العربية",
					lang: "ar",
					dir: 'rtl',
				}
				,
				en: {
					label: "English",
					lang: "en",
					dir:'ltr'
			}	
			},
			social: {
				github: 'https://github.com/sanabel-al-firdaws/sanabel-al-firdaws.github.io/',
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
					translations: { 'en': 'The book of Aqida' },
					

					collapsed: true,
					autogenerate: { directory: 'aqida' },
				},
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
				
			],
		}),
	],
});
