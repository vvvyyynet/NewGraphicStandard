<script>
	let { state } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 200 120"
	width="90"
	height="50"
	data-state={state}
>
	<style>
		svg[data-state='overlap'] .c {
			stroke-width: 3;
			stroke: var(--color-primary-500);
			fill: transparent;
		}
		svg[data-state='overlap'] .overlap {
			fill: var(--color-secondary-500);
		}
		svg[data-state='full'] .c {
			fill: var(--color-secondary-500);
		}
		svg[data-state='full'] .overlap {
			fill: transparent;
		}
	</style>

	<defs>
		<filter id="alpha-multiply" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">
			<feComponentTransfer in="SourceAlpha" result="alpha1">
				<feFuncA type="identity" />
			</feComponentTransfer>
			<feBlend in="SourceGraphic" in2="SourceGraphic" mode="multiply" result="mult" />
		</filter>

		<clipPath id="clip-c2">
			<circle id="c2" cx="130" cy="60" r="40" />
		</clipPath>

		<mask id="mask-intersection">
			<rect x="0" y="0" width="200" height="120" fill="black" />
			<g clip-path="url(#clip-c2)">
				<circle cx="80" cy="60" r="40" fill="white" />
			</g>
		</mask>
	</defs>

	<!-- outlines -->
	<circle class="c" cx="80" cy="60" r="40" />
	<circle class="c" cx="130" cy="60" r="40" />

	<g class="overlap">
		<circle cx="80" cy="60" r="40" mask="url(#mask-intersection)" />
	</g>

	<circle
		cx="80"
		cy="60"
		r="40"
		fill="transparent"
		stroke="var(--color-primary-500)"
		stroke-width="3"
	/>
	<circle
		cx="130"
		cy="60"
		r="40"
		fill="transparent"
		stroke="var(--color-primary-500)"
		stroke-width="3"
	/>
</svg>
