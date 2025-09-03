<script>
	let { classes = '', href = '', children } = $props();
</script>

<a class={classes} {href} target="_blank">
	{@render children()}
</a>
