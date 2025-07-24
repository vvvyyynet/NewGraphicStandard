<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(base)
		goto(`${base}/angebot/beratung`);
	});
</script>
