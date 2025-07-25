<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	import IconLightswitch1 from '$lib/icons/lightswitch_1.svelte';
	import IconLightswitch2 from '$lib/icons/lightswitch_2.svelte';

	let checked = $state(false); // false = light-mode (default)
	let { call = ()=>{}, classes = '' } = $props();

	$effect(() => {
		const darkModeState = localStorage.getItem('darkModeState') || 'light';
		checked = darkModeState === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const darkModeState = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-darkModeState', darkModeState);
		localStorage.setItem('darkModeState', darkModeState);
		checked = event.checked;
		call();
	};

	onMount(() => {
		// Check the user's preferred color scheme
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDarkScheme) {
			checked = true;
			onCheckedChange({ checked: checked });
		} else {
			checked = false;
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
	classes={'text-primary-500 h-40 w-40'.concat(' ', classes)}
	{checked}
	name="darkmodeToggle"
	controlActive="bg-white hover:bg-secondary-500"
	controlInactive="bg-white border border-primary-500 hover:bg-secondary-500"
	{onCheckedChange}
>
	{#snippet inactiveChild()}<IconLightswitch1 />{/snippet}
	{#snippet activeChild()}<IconLightswitch2 />{/snippet}
</Switch>
