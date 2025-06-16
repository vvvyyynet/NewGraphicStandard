<script>
	let amount = $state(99);
	const close = () => {
		console.log('closing');
	};
</script>

<div class="bg-white rounded-lg p-10 flex gap-5 max-w-200 absolute max-h-80 bottom-20 right-20 border">
	<p>🌍</p>
	<p>
		Diese Webseite hat einen CO<sub>2</sub>-Abdruck von {amount} CO<sub>2</sub>-eq pro
		Seitenansicht. Erfahre <a href="co2">hier</a> mehr dazu.
	</p>
	<button
		onclick={() => {
			close();
		}}>x</button
	>
</div>
