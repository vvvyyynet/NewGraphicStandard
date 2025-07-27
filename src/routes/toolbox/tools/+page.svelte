<script lang="ts">
	import type { PageProps } from './$types';
	import Tile from '$lib/components/Tile.svelte';
	import { onMount } from 'svelte';
	import Columns from '$lib/components/Columns.svelte';

	let { data }: PageProps = $props();
	const tools = data.tools;

	let Abstracts: Record<string, any> = $state({});

	onMount(async () => {
		for (const tool of tools) {
			Abstracts[tool.slug] = (await import(`./${tool.folder}/Abstract.md`)).default;
		}
	});
</script>

<Columns ncols={[2, 2, 1]} gap={10} classes="mx-auto gap-y-2 gap-x-1 px-[5vw]">
	<!-- <div class="flex max-h-[200vh] flex-col gap-4 lg:flex-wrap"> -->
	<!-- <div class="flex-width flex gap-4 lg:flex-wrap"> -->
	{#each [...tools].sort(() => Math.random() - 0.5) as tool}
		{#if Abstracts[tool.slug]}
			<Tile
				hasContent={tool.hasContent}
				classes="max-w-[90vw] rounded-2xl border-2 p-5 flex flex-col justify-start"
				href={`./tools/${tool.folder}`}
			>
				<p class="font-bold">
					{#each tool.tags as tag}<span class="mx-2">#{tag}</span>{/each}
				</p>
				<svelte:component this={Abstracts[tool.slug]} />
			</Tile>
		{/if}
	{/each}
	<!-- </div> -->
</Columns>
