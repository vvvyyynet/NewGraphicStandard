export const prerender = true;

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const res = await fetch('/data/tools-list.json');
	const tools = await res.json();
	return {
		tools: tools.sort(() => Math.random() - 0.5),
		title: 'Toolbox',
		sections: [
			{ slug: 'publikationen', title: 'Publikationen' },
			{ slug: 'tools', title: 'Tools' }
		]
	};
};
