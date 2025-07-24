<script lang="ts">
	import { Lightbulb } from 'lucide-svelte';
	import { LightbulbOff } from 'lucide-svelte';

	let { classes = '' } = $props();
</script>

<button class={['', classes]}> <LightbulbOff /> </button>
