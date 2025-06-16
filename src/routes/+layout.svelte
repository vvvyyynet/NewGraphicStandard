<script lang="ts">
	import '../app.css';
	import Menu from './Menu.svelte';
	import DarkSwitch from '$lib/components/darkSwitch.svelte';
	let { children } = $props();
</script>

<div class="absolute grid h-full w-full md:grid-cols-[600px_auto]">
	<Menu />
	{@render children()}
</div>
<DarkSwitch />
