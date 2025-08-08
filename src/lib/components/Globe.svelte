<script>
	import { onDestroy } from 'svelte';
	let { isTurning = false, classes = '' } = $props();

	let globeNum = $state(Math.floor(Math.random() * 3 + 1));

	const toggleState = () => {
		globeNum = (globeNum % 3) + 1;
	};

	let intervalGlobe;
	$effect(() => {
		if (isTurning) {
			intervalGlobe = setInterval(toggleState, 400);
		} else {
			clearInterval(intervalGlobe);
		}
	});
	onDestroy(() => {
		clearInterval(intervalGlobe);
	});
</script>

<img
	src={`/img/globe-${globeNum}.png`}
	alt="🌍"
	class={classes}
	onmouseover={() => {
		isTurning = true;
	}}
	onmouseleave={() => {
		isTurning = false;
	}}
/>
