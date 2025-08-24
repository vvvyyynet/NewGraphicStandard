<script>
	let { size = 100, classes = '', colors } = $props();
	let figFill = colors.bg ? `fill-[${colors.bg}]` : 'fill-none';
	let figStroke = colors.w ? `stroke-[${colors.w}]` : 'stroke-none';
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 39.962601 39.962601"
	><circle
		class={['fig', figFill, figStroke]}
		style="stroke-miterlimit: 4;stroke-width: 1px;"
		cx="19.9813"
		cy="19.9813"
		r="19.4813"
	/><line
		class={['fig', figFill, figStroke]}
		style="stroke-miterlimit: 4;stroke-width: 2px;"
		x1="30.031975"
		y1="29.638208"
		x2="9.930626"
		y2="10.324393"
	/><line
		class={['fig', figFill, figStroke]}
		style="stroke-miterlimit: 4;stroke-width: 2px;"
		x1="30.031989"
		y1="10.324393"
		x2="9.930612"
		y2="29.638208"
	/></svg
>
