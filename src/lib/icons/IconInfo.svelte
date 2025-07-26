<script>
	let { size = 100, classes = '', isActive = false, colors } = $props();
	let figFill = $derived(isActive ? `fill-[${colors.bg}]` : `fill-[${colors.w}]`);
	let figStroke = $derived(isActive ? `stroke-[${colors.a}]` : `stroke-[${colors.bg}]`);
	let circFill = $derived(isActive ? `fill-[${colors.a}]` : `fill-[${colors.bg}]`);
	let circStroke = $derived(isActive ? `stroke-[${colors.a}]` : `stroke-[${colors.w}]`);
</script>

<svg
	class={classes}
	xmlns="http://www.w3.org/2000/svg"
	width="{size}%"
	height="{size}%"
	viewBox="0 0 50 50"
	><circle class={['circ', circFill, circStroke]} cx="25" cy="25" r="24.5" /><path
		class={['fig', figFill, figStroke]}
		d="M27.6138,18.129101v16.7099h5.57v2.876999h-14.455299v-2.876999h5.5347v-13.832901h-5.5347v-2.876999h8.8853ZM27.6138,11.3223v3.969h-3.350599v-3.969h3.350599Z"
	/></svg
>
