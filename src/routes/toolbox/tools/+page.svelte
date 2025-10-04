<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import { onMount } from 'svelte';
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
		return { toolsSets, sums };
	}

	// Shuffle tools
	// Filter tools
	let tools = data.tools;
	let allowedTags = $state([]);
	$inspect(allowedTags);
	let useAllTags = $state(false);
	// split by size (the size is set manually in 'tools-list.json')
	let tools_filtered = $derived(
		tools.filter((tool) => {
			if (allowedTags.length === 0) {
				return true;
			} else if (useAllTags) {
				return allowedTags.every((tag) => tool.tags.includes(tag));
			} else {
				return allowedTags.some((tag) => tool.tags.includes(tag));
			}
		})
	);
	let nCols = $state(1);
	let elToolsContainer;
	let widthToolsContainer = $state();

	function nCol_from_width(width) {
		if (width >= 110 * 16) {
			return 4;
		} else if (width >= 75 * 16) {
			return 3;
		} else if (width >= 45 * 16) {
			return 2;
		} else {
			return 1;
		}
	}
	// Load all Abstracts
	let Abstracts: Record<string, any> = $state({});

	onMount(async () => {
		// import Abstracts of tools
		for (const tool of tools) {
			Abstracts[tool.slug] = (await import(`./${tool.folder}/Abstract.md`)).default;
		}
	});

	// Functions for Filters
	const toggleTag = (tag) => {
		allowedTags = allowedTags.includes(tag)
			? allowedTags.filter((t) => t !== tag)
			: [...allowedTags, tag];
	};

	let fresh = $state('');
</script>

<!-- Filters -->
<div class="dark:bg-primary-500 top-0 z-900 mb-10 bg-white pt-1 pb-4 lg:sticky lg:-mx-10">
	<p class="mb-2 text-sm">Nach Kategorien filtern</p>
	<div class="flex flex-wrap gap-2">
		<div class="flex flex-wrap gap-2">
			{#each Array.from(new Set([...data.tools.flatMap((tool) => tool.tags)])) as tag (tag)}
				<button
					onclick={() => {
						toggleTag(tag);
						fresh = tag;
					}}
					onpointerleave={() => {
						fresh = '';
					}}
					class={[
						'text-primary-500 rounded-full border-1 px-3 text-[18px]',
						((!allowedTags.includes(tag) && fresh !== tag) ||
							(allowedTags.includes(tag) && fresh === tag)) &&
							'border-primary-500 hover:bg-secondary-500 bg-transparent dark:border-white dark:text-white  ',
						((allowedTags.includes(tag) && fresh !== tag) ||
							(!allowedTags.includes(tag) && fresh === tag)) &&
							'bg-secondary-500 dark:border-secondary-500 hover:bg-transparent hover:dark:border-white hover:dark:text-white'
					]}
				>
					{tag}
				</button>
			{/each}
		</div>
		<Switch
			checked={useAllTags}
			classes="ml-5"
			labelClasses="text-lg"
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

<div
	bind:this={elToolsContainer}
	bind:clientWidth={widthToolsContainer}
	class="@container h-full w-full"
>
	{#snippet columns(width: number)}
		{@const nCol = nCol_from_width(width)}
		{@const toolsSets2 = splitToolsBySize(tools_filtered, nCol).toolsSets}
		<div
			class={[
				'-mx-2 grid grid-cols-1 gap-5 p-0 lg:-mx-5 @md:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4'
			]}
		>
			<!-- <div class="flex max-h-[200vh] flex-col gap-4 lg:flex-wrap"> -->
			<!-- <div class="flex-width flex gap-4 lg:flex-wrap"> -->
			{#each toolsSets2 as tools}
				<div class="flex flex-col gap-5">
					{#each tools as tool}
						{#if Abstracts[tool.slug]}
							{@const Abstract = Abstracts[tool.slug]}
							<Tile
								hasContent={tool.hasContent}
								classes="rounded-2xl border-2 p-5 flex flex-col justify-start"
								href={`./tools/${tool.folder}`}
							>
								<ul class="flex flex-wrap gap-2 gap-y-0 p-0">
									{#each tool.tags as tag}
										<li class="!m-1 inline p-0 font-bold">#{tag}</li>
									{/each}
								</ul>
								<Abstract />
							</Tile>
						{/if}
					{/each}
				</div>
			{/each}
			{#if !tools_filtered.some((tool) => {
				return !tool.length;
			})}
				<p class="col-span-10">
					Keine passenden Tools gefunden. Verändere die Filter, um Tools anzuzeigen.
				</p>
			{/if}
		</div>
	{/snippet}
	{@render columns(widthToolsContainer)}
</div>
