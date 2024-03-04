import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Frontier',
			// Set English as the default language for this site.
			defaultLocale: 'root',
			locales: {
				// Korean docs in `src/content/docs/ko/`
				root: {
					label: '한국어',
					lang: 'ko-KR',
				},
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '시작하기',
					translations: {
						en: 'Getting Started',
					},
					autogenerate: { directory: 'getting-started' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					//
					// ],
				},
				{
					label: '핵심 개념',
					translations: {
						en: 'Core Concepts',
					},
					autogenerate: { directory: 'concepts' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					//
					// ],
				},
				{
					label: '튜토리얼',
					translations: {
						en: 'Tutorial',
					},
					autogenerate: { directory: 'tutorial' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					//
					// ],
				},
				{
					label: '참고',
					translations: {
						en: 'References',
					},
					autogenerate: { directory: 'references' },
				},
			],
		}),
	],
});
