<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';
	import Page from './Page.md';

	let route = $derived(page.url.pathname.split('/').pop());
</script>

<Multipage title="Impressum" {route}>
	<Page />
</Multipage>
