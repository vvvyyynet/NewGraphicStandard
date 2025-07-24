<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	import { Moon, Sun } from 'lucide-svelte';

	let checked = $state(false); // false = light-mode (default)
	let { classes = '' } = $props();

	$effect(() => {
		const darkModeState = localStorage.getItem('darkModeState') || 'light';
		checked = darkModeState === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const darkModeState = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-darkModeState', darkModeState);
		localStorage.setItem('darkModeState', darkModeState);
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
		const darkModeState = localStorage.getItem('darkModeState') || 'light';
		document.documentElement.setAttribute('data-darkModeState', darkModeState);
	</script>
</svelte:head>

<Switch
	compact
	classes = {'text-primary-500'.concat(' ', classes)}
	{checked}
	name="darkmodeToggle"
	controlActive="bg-white hover:bg-secondary-500"
	controlInactive="bg-white border border-primary-500 hover:bg-secondary-500"
	{onCheckedChange}
>
	{#snippet inactiveChild()}<Moon />{/snippet}
	{#snippet activeChild()}<Sun />{/snippet}
</Switch>
