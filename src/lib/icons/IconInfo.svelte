<script>
	let {
		size = 30,
		classes = '',
		isActive = false,
		colors = { a: 'lightgreen', w: 'white', bg: 'blue' }
	} = $props();
	let figFill = $derived(isActive ? colors.bg : colors.w);
	let figStroke = $derived(isActive ? 'none' : 'none');
	let circFill = $derived(isActive ? colors.a : 'none');
	let circStroke = $derived(isActive ? colors.a : colors.w);
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 50 50"
	><circle style="fill: {circFill}; stroke: {circStroke};" cx="25" cy="25" r="24.5" /><path
		style="fill: {figFill}; stroke: {figStroke};"
		d="M27.6138,18.129101v16.7099h5.57v2.876999h-14.455299v-2.876999h5.5347v-13.832901h-5.5347v-2.876999h8.8853ZM27.6138,11.3223v3.969h-3.350599v-3.969h3.350599Z"
	/></svg
>
