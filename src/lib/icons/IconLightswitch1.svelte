<script>
	let { size = 100, classes = '', isActive = false, colors } = $props();
	let figFill = `fill-[${colors.w}]`;
	let figStroke = `stroke-[${colors.w}]`;
	let circFill = `fill-[${colors.bg}]`;
	let circStroke = `stroke-[${colors.w}]`;
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 39.962601 39.962603"
	><circle class={['circ', circFill, circStroke]} cx="19.9813" cy="19.981302" r="19.481301" /><path
		class={['fig', figFill, figStroke]}
		d="M20.482401.505869c10.528198.265225,18.981501,8.883551,18.981501,19.475631-.000103,10.5919-8.453402,19.209301-18.981501,19.474598l.001999-19.474598-.001999-19.475631Z"
	/></svg
>
