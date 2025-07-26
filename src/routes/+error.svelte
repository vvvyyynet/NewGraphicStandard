<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';
	import Error from './Error.md';

	let route = $derived(page.url.pathname.split('/').pop());
</script>

<Multipage title="404" noMenu>
	<Error />
</Multipage>
