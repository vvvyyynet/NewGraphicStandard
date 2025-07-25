import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: "Angebot",
		sections: [
			{ slug: 'beratung', title: 'Beratung' },
			{ slug: 'talks', title: 'Talks' },
			{ slug: 'workshops', title: 'Workshops' }
		]
	};
};