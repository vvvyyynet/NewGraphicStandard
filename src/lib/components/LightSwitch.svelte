<script lang="ts">
	import { onMount } from 'svelte';

	import IconLightswitch1 from '$lib/icons/IconLightswitch1.svelte';
	import IconLightswitch2 from '$lib/icons/IconLightswitch2.svelte';

	let {
		isDark = $bindable(false),
		callback = () => {},
		classes = '',
		size = 99,
		colors
	} = $props();

	let darkModeState = $derived(isDark ? 'dark' : 'light');

	const onCheckedChange = (force = '') => {
		if (force == 'dark') isDark = true;
		else if (force == 'light') isDark = false;
		else isDark = !isDark;
		document.documentElement.setAttribute('data-darkModeState', darkModeState);
		callback();
	};

	onMount(() => {
		// Check the user's preferred color scheme
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDarkScheme) {
			onCheckedChange('dark');
		} else {
			onCheckedChange('light');
		}
	});
</script>

<button
	aria-roledescription={isDark ? 'zum hellen Modus' : 'zum dunklen Modus'}
	class={classes}
	onclick={(ev) => {
		onCheckedChange();
	}}
>
	{#if isDark}
		<IconLightswitch1 {size} {colors} />
	{:else}
		<IconLightswitch2 {size} {colors} />
	{/if}
</button>
