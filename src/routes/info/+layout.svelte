<script lang="ts">
	import { page } from '$app/state';
	import Multipage from '$lib/components/Multipage.svelte';
	import { onMount } from 'svelte';
	
	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();
	console.log(data.sections)
	let parentRoute = $state('/');
	onMount(()=>{
		parentRoute = page.url.pathname;
	});

</script>

<Multipage title={data.title} {children} sections={data.sections} {parentRoute} getMaxWidth={(rt) => {
		if (rt == 'ueber') {
			return 'lg:max-w-[85%] mx-auto';
		} else {
			return undefined;
		}
	}}
/>
