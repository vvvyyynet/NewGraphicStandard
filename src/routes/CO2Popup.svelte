<script>
	import Globe from '$lib/components/Globe.svelte';

	let { classes = '' } = $props();
	let amount = $state(9999);
	let showPopup = $state(true);
</script>

{#if showPopup}
	<div class={['max-h-80 max-w-150 rounded-lg bg-white text-2xl text-black ', classes]}>
		<a href="/abdruck" class="absolute h-full w-full hover:cursor-pointer"> </a>
		<div class="flex h-full w-full flex-row items-start justify-center gap-4 p-6">
			<Globe isTurning={true} classes="max-h-9 " />
			<p>
				Diese Webseite hat einen CO<sub>2</sub>-Abdruck von ungefähr
				0,03 g CO<sub>2</sub> pro Seitenaufruf. Erfahre
				<a href="/abdruck" class="underline">hier</a> mehr dazu.
			</p>
		</div>
	</div>
{/if}
