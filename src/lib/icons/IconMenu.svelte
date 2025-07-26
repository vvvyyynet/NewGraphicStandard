<script>
	let { size = 100, classes = '', colors } = $props();
	let figFill = `fill-[${colors.w}]`;
	let figStroke = `stroke-[${colors.bg}]`;
	let circFill = `fill-[${colors.bg}]`;
	let circStroke = `stroke-[${colors.w}]`;
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 39.962601 39.962603"
	><circle
		class={['circ', circFill, circStroke]}
		cx="19.9813"
		cy="19.981301"
		r="19.481301"
	/><circle class={['fig', figFill, figStroke]} cx="10.29277" cy="19.980932" r="2.25" /><circle
		class={['fig', figFill, figStroke]}
		cx="19.981246"
		cy="19.966284"
		r="2.25"
	/><circle class={['fig', figFill, figStroke]} cx="29.669723" cy="19.980932" r="2.25" /></svg
>
