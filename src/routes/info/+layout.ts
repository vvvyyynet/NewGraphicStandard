import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: "Info",
		sections: [
			{ slug: 'verein', title: 'Verein' },
			{ slug: 'recherche', title: 'Recherche' },
			{ slug: 'ueber', title: 'Über uns' }
		]
	};
};
