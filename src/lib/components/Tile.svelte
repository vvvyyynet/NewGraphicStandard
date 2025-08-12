<script>
	let { hasContent = false, classes = '', href = '', children } = $props();
</script>

<div
	class={[
		'border-primary-500 relative text-left',
		hasContent &&
			'bg-primary-500 hover:bg-secondary-500 dark:text-primary-500 hover:text-primary-500 text-white dark:border-white dark:bg-white',
		!hasContent &&
			'text-primary-500 dark:bg-primary-500 bg-white dark:border-white dark:text-white',
		classes
	]}
>
	{#if hasContent}
		<a {href} class="absolute top-0 left-0 h-full w-full hover:cursor-pointer"> </a>
	{/if}
	<div class={['']}>
		{@render children()}
	</div>
</div>
