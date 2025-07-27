<script>
	import { X } from 'lucide-svelte';
	let { classes = '' } = $props();
	let amount = $state(9999);
	let showPopup = $state(true);
</script>

{#if showPopup}
	<div class={['max-h-80 max-w-200 rounded-lg border bg-white text-3xl text-black ', classes]}>
		<a href="/co2" class="absolute h-full w-full hover:cursor-pointer"> </a>
		<div class="flex h-full w-full flex-row items-center justify-center gap-10 p-10">
			<img src="/img/globe.gif" alt="🌍" class="h-10 max-h-10 w-10 max-w-10" />
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
	</div>
{/if}
