import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: "Info",
		sections: [
			{ slug: 'recherche', title: 'Recherche' },
			{ slug: 'ueber', title: 'Über uns' },
			{ slug: 'verein', title: 'Verein' }
		]
	};
};