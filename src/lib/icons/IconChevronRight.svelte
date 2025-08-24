<script>
	let { size = 100, classes = '', colors } = $props();
	let figFill = `fill-[${colors.bg}]`;
	let figStroke = `stroke-[${colors.w}]`;
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 45.442205 45.442234"
	><polyline
		class={['fig', figFill, figStroke]}
		style="stroke-miterlimit: 4; stroke-width: 2px;"
		points="10.897293 .721092 33.794416 22.721117 10.897293 44.721143"
	/></svg
>
