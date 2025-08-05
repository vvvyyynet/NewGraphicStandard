<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import { onMount } from 'svelte';
	import Columns from '$lib/components/Columns.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let { data } = $props();

	function splitToolsBySize(tools: Array<{ size: number }>, nbins: number) {
		let toolsSets = Array.from({ length: nbins }, () => []);
		let sums = Array(nbins).fill(0);
		// Add to the set with smallest current sum
		tools.forEach((tool) => {
			const idx = sums.indexOf(Math.min(...sums));
			toolsSets[idx].push(tool);
			sums[idx] += tool.size;
		});
		console.log(sums, toolsSets);
		return { toolsSets, sums };
	}

	// Shuffle tools
	// Filter tools
	let tools = [...data.tools].sort(() => Math.random() - 0.5);
	let allowedTags = $state(['very serious']);
	let useAllTags = $state(false);
	// split by size (the size is set manually in 'tools-list.json')
	let tools_filtered = $derived(
		tools.filter((tool) => {
			if (allowedTags.includes('all')) {
				return true;
			} else if (useAllTags) {
				return allowedTags.every((tag) => tool.tags.includes(tag));
			} else {
				return allowedTags.some((tag) => tool.tags.includes(tag));
			}
		})
	);
	let isAboveLgScreen = $state(false);
	let isAboveMdScreen = $state(false);
	let nCols = $state(3);
	$inspect(nCols, isAboveLgScreen, isAboveMdScreen);

	const handleResize = () => {
		isAboveLgScreen = window.matchMedia('(min-width: 1024px)').matches;
		isAboveMdScreen = window.matchMedia('(min-width: 1000px)').matches;
		nCols = isAboveLgScreen ? 3 : isAboveMdScreen ? 2 : 1;
		// console.log('RESIZE', nCols, isAboveLgScreen, isAboveMdScreen, window.innerWidth);
	};

	let { toolsSets } = $derived(splitToolsBySize(tools_filtered, nCols));

	// Load all Abstracts
	let Abstracts: Record<string, any> = $state({});

	onMount(async () => {
		for (const tool of tools) {
			Abstracts[tool.slug] = (await import(`./${tool.folder}/Abstract.md`)).default;
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// Functions for Filters
	const toggleTag = (tag) => {
		allowedTags = allowedTags.includes(tag)
			? allowedTags.filter((t) => t !== tag)
			: [...allowedTags, tag];
	};
</script>

<!-- Filters -->
<div class="dark:bg-primary-500 sticky top-0 mb-10 bg-white pt-1 pb-4">
	<h2 class="mb-2 text-sm">Nach Kategorie filtern</h2>
	<div class="flex flex-wrap gap-2">
		<div class="flex flex-wrap gap-2">
			{#each Array.from(new Set(['all', ...data.tools.flatMap((tool) => tool.tags)])) as tag (tag)}
				<button
					onclick={() => toggleTag(tag)}
					class={[
						'border-primary-500 text-primary-500 hover:bg-secondary-500 hover:text-primary-500 rounded-full border-2 px-3 py-1 text-xs uppercase dark:border-white ',
						allowedTags.includes(tag) &&
							'bg-secondary-500 text-primary-500 hover:text-primary-500 hover:bg-transparent hover:dark:text-white',
						!allowedTags.includes(tag) && 'dark:text-white'
					]}
				>
					{tag}
				</button>
			{/each}
		</div>
		<Switch
			checked={useAllTags}
			classes="ml-5"
			controlClasses="border border-primary-500 dark:border-white"
			controlActive="bg-white dark:bg-primary-500"
			controlInactive="bg-white dark:bg-primary-500"
			thumbClasses="border border:primary-500 bg-primary-500"
			thumbInactive="bg-primary-500 dark:bg-white"
			thumbActive="bg-primary-500 dark:bg-white"
			onCheckedChange={(e) => (useAllTags = e.checked)}
		>
			{useAllTags ? 'Strikt' : 'Locker'}
		</Switch>
	</div>
</div>

<Columns ncols={[3, 2, 1]} gap={8} classes="mx-auto px-[5vw]">
	<!-- <div class="flex max-h-[200vh] flex-col gap-4 lg:flex-wrap"> -->
	<!-- <div class="flex-width flex gap-4 lg:flex-wrap"> -->
	{#each toolsSets as tools}
		<div class="my-4 flex flex-col gap-8">
			{#each tools as tool}
				{#if Abstracts[tool.slug]}
					<Tile
						hasContent={tool.hasContent}
						classes="max-w-[90vw] rounded-2xl border-2 p-5 flex flex-col justify-start "
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
