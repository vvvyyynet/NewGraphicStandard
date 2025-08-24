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
		points="34.544901 44.721143 11.647785 22.72111 34.544915 .721092"
	/></svg
>
