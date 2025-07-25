import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: 'Toolbox',
		sections: [
			{ slug: 'publikationen', title: 'Publikationen' },
			{ slug: 'tools', title: 'Tools' }
		]
	};
};
