import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: "Info",
		sections: [
			{ slug: 'recherche', title: 'Verein' },
			{ slug: 'ueber', title: 'Recherche' },
			{ slug: 'verein', title: 'Über uns' }
		]
	};
};
