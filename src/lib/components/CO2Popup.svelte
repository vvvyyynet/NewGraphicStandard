<script>
	import { X } from 'lucide-svelte';
	let { classes = '' } = $props();
	let amount = $state(9999);
	let showPopup = $state(true);
</script>

{#if showPopup}
	<div
		class={[
			'max-h-80 max-w-200 flex-row items-center justify-center gap-10 rounded-lg border bg-white p-10 text-xl text-black',
			classes
		]}
	>
		<a href="/co2" class="text-3xl">🌍</a>
		<p>
			Diese Webseite hat einen CO<sub>2</sub>-Abdruck von ungefähr
			<strong>{amount} CO<sub>2</sub>eq pro Seitenansicht.</strong>
			Erfahre <a href="/co2" class="underline">hier</a> mehr dazu.
		</p>
		<button
			onclick={() => {
				showPopup = false;
			}}><X size={40} /></button
		>
	</div>
{/if}
