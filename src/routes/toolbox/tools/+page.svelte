<script lang="ts">
	import type { PageProps } from './$types';
	import Tile from '$lib/components/Tile.svelte';
	import { onMount } from 'svelte';
	import Columns from '$lib/components/Columns.svelte';

	let { data }: PageProps = $props();

	function splitToolsBySize(tools: Array<{ size: number }>) {
		let toolsSet1: typeof tools = [];
		let toolsSet2: typeof tools = [];

		let sum1 = 0;
		let sum2 = 0;

		for (const tool of tools) {
			// Add to the set with smaller current sum
			if (sum1 <= sum2) {
				toolsSet1.push(tool);
				sum1 += tool.size;
			} else {
				toolsSet2.push(tool);
				sum2 += tool.size;
			}
		}
		console.log(`${sum1} (${toolsSet1.length}), ${sum2} (${toolsSet2.length})`);
		return { toolsSet1, toolsSet2, sum1, sum2 };
	}

	// Shuffle tools and split by size (the size is set manually in 'tools-list.json')
	const tools = [...data.tools].sort(() => Math.random() - 0.5);
	let { toolsSet1, toolsSet2 } = splitToolsBySize(tools);

	// Load all Abstracts
	let Abstracts: Record<string, any> = $state({});

	onMount(async () => {
		for (const tool of tools) {
			Abstracts[tool.slug] = (await import(`./${tool.folder}/Abstract.md`)).default;
		}
	});
</script>

<Columns ncols={[2, 2, 1]} gap={8} classes="mx-auto px-[5vw]">
	<!-- <div class="flex max-h-[200vh] flex-col gap-4 lg:flex-wrap"> -->
	<!-- <div class="flex-width flex gap-4 lg:flex-wrap"> -->
	{#each [toolsSet1, toolsSet2] as tools}
		<div class="my-4 flex flex-col gap-8">
			{#each tools as tool}
				{#if Abstracts[tool.slug]}
					<Tile
						hasContent={tool.hasContent}
						classes="max-w-[90vw] rounded-2xl border-2 p-5 flex flex-col justify-start"
						href={`./tools/${tool.folder}`}
					>
						<ul class="p-0">
							{#each tool.tags as tag}
								<li class="dark:text-secondary-500 mr-2 inline p-0 font-bold">#{tag}</li>
							{/each}
						</ul>
						<svelte:component this={Abstracts[tool.slug]} />
					</Tile>
				{/if}
			{/each}
		</div>
	{/each}
	<!-- </div> -->
</Columns>
