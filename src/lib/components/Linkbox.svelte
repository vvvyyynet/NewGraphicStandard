<script>
	import { goto } from '$app/navigation';
	let { hasContent = false, classes = '', href = '' } = $props();
</script>

{#if hasContent}
	<button
		class="max-w-[30vw]"
		onclick={() => {
			goto(href);
		}}
	>
		<div
			class={[
				'bg-primary-500 hover:bg-primary-100 hover:text-primary-500 border-primary-500 rounded-2xl border-2 p-5 text-white',
				classes
			]}
		>
			<slot></slot>
		</div>
		<!-- <a class="absolute z-900 block h-full w-full bg-white/5" {href}> </a> -->
	</button>
{:else}
	<div class="max-w-[30vw]">
		<div class={['border-primary-500 rounded-2xl border-2 bg-white p-5', classes]}>
			<slot></slot>
		</div>
	</div>
{/if}
