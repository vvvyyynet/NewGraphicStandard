<script>
	let { size = 30, classes = '', active = false } = $props();
	let figFill = 'red';
	let figStroke = 'none';
	let circFill = 'none';
	let circStroke = 'red';
</script>

<div class="absolute w-[{size}px] h-[{size}px]">
	<svg
		id="Ebene_1"
		class={classes}
		xmlns="http://www.w3.org/2000/svg"
		width="14.097917mm"
		height="14.097918mm"
		viewBox="0 0 39.962601 39.962603"
		><circle
			style="fill:{circFill}; stroke:{circStroke};"
			cx="19.9813"
			cy="19.981302"
			r="19.481301"
		/><path
			style="fill:{figFill}; stroke:{figStroke};"
			d="M19.4802,39.456733C8.952002,39.191508.498699,30.573182.498699,19.981102c.000103-10.5919,8.453402-19.209301,18.981501-19.474598l-.001999,19.474598.001999,19.475631Z"
		/></svg
	>
</div>
