<script lang="ts">
	import Page from './Page.md';
	let { data } = $props();
	import { page } from '$app/state';
	let route = $derived(page.url.pathname.split('/').pop());
	let tags = $derived(data.tools.find((tool) => tool.folder == route)?.tags);
</script>

<div class={['prose-base h-full w-full min-w-[100%] pb-20 md:text-xs lg:text-lg']}>
	<ul class="p-0">
		{#each tags as tag}
			<li class="dark:text-secondary-500 mr-2 inline p-0 font-bold">#{tag}</li>
		{/each}
	</ul>
	<Page />
</div>
