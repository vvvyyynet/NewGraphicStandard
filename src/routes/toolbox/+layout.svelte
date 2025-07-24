<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';

	let { children } = $props();

	let route = $derived(page.url.pathname.split('/').pop());
	let navList = [
		['publikationen', 'Publikationen'],
		['links', 'Links']
	];
</script>

<Multipage
	title="Toolbox"
	{navList}
	{children}
	{route}
	getMaxWidth={(rt) => {
		if (rt == 'publikationen') {
			return 'max-w-full mx-auto';
		} else if (rt == 'links') {
			return 'max-w-full';
		} else {
			return undefined;
		}
	}}
/>
