<script>
	let { size = 30, classes = '', colors = { a: 'lightgreen', w: 'white', bg: 'blue' } } = $props();
	let figFill = colors.w;
	let figStroke = 'none';
	let circFill = colors.bg;
	let circStroke = colors.w;
</script>

<div class="w-[{size}px] h-[{size}px]">
	<svg
		class={classes}
		xmlns="http://www.w3.org/2000/svg"
		width="{size}px"
		height="{size}px"
		viewBox="0 0 39.962601 39.962603"
		><circle
			style="fill:{circFill}; stroke:{circStroke};"
			cx="19.9813"
			cy="19.981301"
			r="19.481301"
		/><path
			style="fill:{figFill}; stroke:{figStroke};"
			d="M20.482401.505869c10.528198.265225,18.981501,8.883551,18.981501,19.475631-.000103,10.5919-8.453402,19.209301-18.981501,19.474598l.001999-19.474598-.001999-19.475631Z"
		/></svg
	>
</div>
