<script>
	let {
		size = 30,
		classes = '',
		colors = { a: 'lightgreen', w: 'white', bg: 'blue' }
	} = $props();
	let figFill = colors.w;
	let figStroke = 'none';
	let circFill = colors.bg;
	let circStroke = colors.w;
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 39.962601 39.962603"
	><circle
	style="fill: {circFill}; stroke: {circStroke};"
	cx="19.9813"
	cy="19.981301"
	r="19.481301"
/><circle
		style="fill: {figFill}; stroke: {figStroke};"
		cx="10.29277"
		cy="19.980932"
		r="2.25"
	/><circle
		style="fill: {figFill}; stroke: {figStroke};"
		cx="19.981246"
		cy="19.966284"
		r="2.25"
	/><circle
		style="fill: {figFill}; stroke: {figStroke};"
		cx="29.669723"
		cy="19.980932"
		r="2.25"
	/></svg
>
