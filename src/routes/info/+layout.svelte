<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';

	let { children } = $props();
	let route = $derived(page.url.pathname.split('/').pop());
	let navList = [
		['recherche', 'Recherche'],
		['ueber', 'Über uns'],
		['verein', 'Verein']
	];
</script>

<Multipage
	title="Info"
	{navList}
	{children}
	{route}
	getMaxWidth={(rt) => {
		if (rt == 'ueber') {
			return 'lg:max-w-[85%] mx-auto';
		} else {
			return undefined;
		}
	}}
/>
