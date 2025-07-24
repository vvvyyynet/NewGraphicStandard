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

<Multipage title="Toolbox" {navList} {children} {route} getMaxWidth = {(rt)=>{return (rt == 'publikationen') ? 'max-w-full' : undefined}}/>
