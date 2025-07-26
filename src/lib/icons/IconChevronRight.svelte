<script>
	let { size = 30, classes = '', colors = { a: 'lightgreen', w: 'white', bg: 'blue' } } = $props();
	let figFill = 'none';
	let figStroke = colors.w;
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 25.033305 45.442234"
	><polyline
		style="fill: {figFill}; stroke: {figStroke}; stroke-miterlimit: 4; stroke-width: 2px;"
		points=".69284 .721092 23.589963 22.721117 .69284 44.721143"
	/></svg
>
