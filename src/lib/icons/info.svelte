<script>
	let { size = 30, classes = '', active = false } = $props();
	let figFill = 'red';
	let figStroke = 'none';
	let circFill = 'none';
	let circStroke = 'red';
</script>

<svg
	id="Ebene_1"
	xmlns="http://www.w3.org/2000/svg"
	width="{size}px"
	height="{size}px"
	viewBox="0 0 50 50"
	><defs
		><style>
			.cls-1 {
				fill: #fff;
			}
			.cls-2 {
				fill: none;
				stroke: #fff;
			}
		</style></defs
	><circle class="cls-2" cx="25" cy="25" r="24.5" /><path
		class="cls-1"
		d="M27.6138,18.129101v16.7099h5.57v2.876999h-14.455299v-2.876999h5.5347v-13.832901h-5.5347v-2.876999h8.8853ZM27.6138,11.3223v3.969h-3.350599v-3.969h3.350599Z"
	/></svg
>
