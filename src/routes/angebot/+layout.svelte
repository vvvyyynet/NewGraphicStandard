<script lang="ts">
	import Multipage from '$lib/components/Multipage.svelte';

	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();
</script>

<Multipage title={data.title} {children} sections={data.sections} parentRoute="/angebot" />
