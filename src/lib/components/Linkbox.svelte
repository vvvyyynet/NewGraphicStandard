<script>
	import { goto } from '$app/navigation';
	let { hasContent = false, classes = '', href = '', children } = $props();
</script>

{#if hasContent}
	<button
		class="max-w-[90vw] lg:max-w-[30vw]"
		onclick={() => {
			goto(href);
		}}
	>
		<div
			class={[
				'bg-primary-500 hover:bg-primary-100 dark:text-primary-500 hover:text-primary-500 border-primary-500 rounded-2xl border-2 p-5 text-white dark:border-white dark:bg-white',
				classes
			]}
		>
			{@render children()}
		</div>
	</button>
{:else}
	<div class="max-w-[90vw] lg:max-w-[30vw]">
		<div
			class={[
				'border-primary-500 text-primary-500 rounded-2xl border-2 p-5 dark:border-white dark:text-white',
				classes
			]}
		>
			{@render children()}
		</div>
	</div>
{/if}
