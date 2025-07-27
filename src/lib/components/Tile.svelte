<script>
	import { goto } from '$app/navigation';
	let { hasContent = false, classes = '', href = '', children } = $props();
</script>

{#if hasContent}
	<button
		class={[
			'bg-primary-500 hover:bg-primary-100 dark:text-primary-500 hover:text-primary-500 border-primary-500 text-left text-white dark:border-white dark:bg-white',
			classes
		]}
		onclick={() => {
			goto(href);
		}}
	>
		<div class={['']}>
			{@render children()}
		</div>
	</button>
{:else}
	<div class={['border-primary-500 text-primary-500 dark:border-white dark:text-white', classes]}>
		<div class={['']}>
			{@render children()}
		</div>
	</div>
{/if}
