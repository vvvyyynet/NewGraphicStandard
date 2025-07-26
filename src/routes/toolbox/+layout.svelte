<script lang="ts">
	import Multipage from '$lib/components/Multipage.svelte';

	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();
</script>

<Multipage
	title={data.title}
	{children}
	sections={data.sections}
	parentRoute="/toolbox"
	getMaxWidth={(rt) => {
		if (rt == 'publikationen') {
			return 'max-w-full mx-auto';
		} else if (rt == 'tools') {
			return 'max-w-full';
		} else {
			return undefined;
		}
	}}
/>
