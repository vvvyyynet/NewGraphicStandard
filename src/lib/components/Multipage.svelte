<script>
	import { page } from '$app/state';
	let {
		sections = [{ slug: '', title: '' }],
		title = '',
		children,
		getMaxWidth = (rt) => {
			return undefined;
		},
		parentRoute
	} = $props();

	let route = $derived(page.url.pathname.split('/').pop());

	// Obtain route-dependent custom maxwidth via callback or set to fallback.
	const MAXWIDTHCLASS = 'max-w-[95%] md:max-w-[85%] lg:max-w-[70%] mx-auto';
	let maxWidthClass = $derived(getMaxWidth(route) ? getMaxWidth(route) : MAXWIDTHCLASS);
</script>

<div class="align-center flex w-full flex-col">
	<!-- Heading -->
	<h1 class="h1 text-center">{@html title}</h1>

	<!-- Menu Top -->

	<nav class="mx-auto mt-5 mb-10 block w-full overflow-x-auto pr-5 pb-4 pl-10 lg:mb-20">
		<ul class="flex justify-center gap-2">
			<!-- 	
	<nav class="mx-auto mt-5 mb-10 block lg:mb-20">
		<ul class="flex flex-wrap justify-center gap-2">
	 -->
			{#each sections as section}
				<li class="">
					<a
						href="{parentRoute}/{section.slug}"
						class={[
							route == section.slug && 'bg-secondary-500 text-primary-500',
							'hover:bg-secondary-500 hover:text-primary-500 flex min-w-30 justify-center rounded-full border p-0 text-lg'
						]}
					>
						<span class="text-center">{section.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Content -->
	<div class={['prose-base md:text-md pb-20 lg:text-lg', maxWidthClass]}>
		{@render children()}
	</div>
</div>
