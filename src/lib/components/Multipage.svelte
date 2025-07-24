<script>
	let {
		navList = [],
		title = '',
		children,
		getMaxWidth = (rt) => {
			return undefined;
		},
		route
	} = $props();

	// Obtain route-dependent custom maxwidth via callback or set to fallback.
	const MAXWIDTHCLASS = 'max-w-[95%] md:max-w-[85%] lg:max-w-[70%] mx-auto';
	let maxWidthClass = $derived(getMaxWidth(route) ? getMaxWidth(route) : MAXWIDTHCLASS);
</script>

<div class="align-center flex w-full flex-col">
	<!-- Heading -->
	<h1 class="h1 text-center">{@html title}</h1>

	<!-- Menu Top -->

	<nav class="mx-auto mt-5 mb-10 block w-full overflow-x-auto pb-4 pl-10 pr-5 lg:mb-20">
		<ul class="flex justify-center gap-2">
	<!-- 	
	<nav class="mx-auto mt-5 mb-10 block lg:mb-20">
		<ul class="flex flex-wrap justify-center gap-2">
	 -->
			{#each navList as item}
				<li class="">
					<a
						onclick={() => {
							route = item[0];
						}}
						href={item[0]}
						class={[
							route == item[0] && 'bg-secondary-500',
							'hover:bg-secondary-500 flex min-w-30 justify-center rounded-full border p-0 text-lg'
						]}
					>
						<p class="text-center">{item[1]}</p>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Content -->
	<div class={['prose-base md:text-md lg:text-lg pb-20', maxWidthClass]}>
		{@render children()}
	</div>
</div>
