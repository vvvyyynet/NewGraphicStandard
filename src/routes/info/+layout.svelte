<script lang="ts">
	import { page } from '$app/state';
	import Page from '$lib/components/Page.svelte';

	let { children } = $props();
	let route = page.url.pathname.split('/').pop()
	console.log(route)
	let navList = [
		['recherche', 'Recherche'],
		['ueber', 'Über uns'],
		['verein', 'Verein']
	];
</script>

<Page {navList} {children} {route} />
