<script>
	let { size = 100, classes = '', colors } = $props();
	let figFill = `fill-[${colors.bg}]`;
	let figStroke = $derived(`stroke-[${colors.x}]`);
	let circFill = `fill-[${colors.w}]`;
	let circStroke = $derived(`stroke-[${colors.x}]`);
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 39.962601 39.962603"
	><circle class={['circ', circFill, circStroke]} cx="19.9813" cy="19.981302" r="19.481301" /><path
		class={['fig', figFill, figStroke]}
		d="M19.4802,39.456733C8.952002,39.191508.498699,30.573182.498699,19.981102c.000103-10.5919,8.453402-19.209301,18.981501-19.474598l-.001999,19.474598.001999,19.475631Z"
	/></svg
>
