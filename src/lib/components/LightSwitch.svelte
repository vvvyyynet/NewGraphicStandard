<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	import { Lightbulb } from 'lucide-svelte';
	import { LightbulbOff } from 'lucide-svelte';

	let checked = $state(false); // false = light-mode (default)
	let { classes = '' } = $props();

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};

	onMount(() => {
		// Check the user's preferred color scheme
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDarkScheme) {
			checked = true;
			onCheckedChange({ checked: checked });
		}
	});
</script>

<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<Switch
	compact
	classes = {'text-primary-500'.concat(' ', classes)}
	{checked}
	name="darkmodeToggle"
	controlActive="bg-white hover:bg-secondary-500"
	controlInactive="bg-white border-primary-500 hover:bg-secondary-500"
	{onCheckedChange}
>
	{#snippet inactiveChild()}<Lightbulb />{/snippet}
	{#snippet activeChild()}<LightbulbOff />{/snippet}
</Switch>
