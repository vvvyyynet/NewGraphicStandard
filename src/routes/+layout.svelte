<script lang="ts">
	import '../app.css';
	import Menu from './Menu.svelte';
	let { children } = $props();
</script>

<div class="grid md:grid-cols-2">
	<Menu />
	{@render children()}
</div>