import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: "Angebot",
		sections: [
			{ slug: 'talks', title: 'Talks' },
			{ slug: 'workshops', title: 'Workshops' },
			{ slug: 'beratung', title: 'Beratung' }
		]
	};
};
