<script>
	let { navList=[], title = '', children, route} = $props();
	let activeRoute = $derived(route.split('/').pop());
	// $state(navList.length ? navList[0][0] : '');
</script>

<div class="align-center flex w-full flex-col p-5">
	<!-- Heading -->
	<h1 class="h1 text-center">{title}</h1>

	<!-- Menu Top -->
	<nav class="mx-auto my-5 block">
		<ul class="flex gap-2">
			{#each navList as item}
				<li class="">
					<a
						onclick={() => {
							activeRoute = item[0];
						}}
						href={item[0]}
						class={[
							activeRoute == item[0] && 'bg-secondary-500',
							'hover:bg-secondary-500 flex min-w-30 justify-center rounded-full border p-2'
						]}
					>
						<p class="text-center">{item[1]}</p>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Content -->
	<div class="prose-base mx-auto max-w-200 md:text-lg lg:text-xl">
		{@render children()}
	</div>
</div>
