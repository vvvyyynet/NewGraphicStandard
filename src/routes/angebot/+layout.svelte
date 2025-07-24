<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';

	let { children } = $props();

	let route = $derived(page.url.pathname.split('/').pop());
	let navList = [
		['beratung', 'Beratung'],
		['talks', 'Talks'],
		['workshops', 'Workshops']
	];
</script>

<Multipage title="Angebot" {navList} {children} {route} />
