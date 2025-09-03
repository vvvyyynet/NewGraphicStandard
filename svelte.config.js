import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			smartypants: {
				quotes: true,
				ellipses: true,
				backticks: true,
				dashes: 'oldschool'
			}
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "index.html",
			// precompress: false,
			// strict: true
		}),
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: 'ignore'
		},
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
