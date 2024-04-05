import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:' https://lgcns-build-center.github.io/',
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
					label: '가이드',
					translations: {
						en: 'Guides',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: '튜토리얼',
					translations: {
						en: 'Tutorial',
					},
					autogenerate: { directory: 'tutorial' },
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
