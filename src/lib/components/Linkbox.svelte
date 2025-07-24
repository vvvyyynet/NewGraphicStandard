<script>
	import { goto } from '$app/navigation';
	let { hasContent = false, classes = '', href = '' } = $props();
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
				'bg-primary-500 hover:bg-primary-100 dark:bg-white text-white dark:text-primary-500 hover:text-primary-500 border-primary-500 dark:border-white rounded-2xl border-2 p-5',
				classes
			]}
		>
			<slot></slot>
		</div>
	</button>
{:else}
	<div class="max-w-[90vw] lg:max-w-[30vw]">
		<div class={['border-primary-500 dark:border-white rounded-2xl border-2 text-primary-500 dark:text-white p-5', classes]}>
			<slot></slot>
		</div>
	</div>
{/if}
