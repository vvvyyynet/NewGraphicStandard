<script>
	let { classes = '' } = $props();
	let amount = $state(9999);
	let showPopup = $state(true);
</script>

{#if showPopup}
	<div class={['max-h-80 max-w-150 rounded-lg border bg-white text-2xl text-black ', classes]}>
		<a href="/abdruck" class="absolute h-full w-full hover:cursor-pointer"> </a>
		<div class="flex h-full w-full flex-row items-center justify-center gap-10 p-6">
			<img src="/img/globe.gif" alt="🌍" class="h-10 max-h-10 w-10 max-w-10" />
			<p>
				Diese Webseite hat einen CO<sub>2</sub>-Abdruck von ungefähr
				{amount} CO<sub>2</sub>eq pro Seitenansicht. Erfahre
				<a href="/abdruck" class="underline">hier</a> mehr dazu.
			</p>
		</div>
	</div>
{/if}
