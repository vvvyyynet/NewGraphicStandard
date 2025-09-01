<script>
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import IconClose from '$lib/icons/IconClose.svelte';
	import { isDark, isLargeScreen } from '$lib/store/stores.svelte';

	let { href, children } = $props();
	if (!href) {
		href = '/pdf/test.pdf';
	}
	let openState = $state(false);
</script>

<Modal
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	backdropClasses="backdrop-blur-sm"
	backdropBackground="bg-primary-100/80 dark:bg-primary-800/80"
>
	{#snippet trigger()}
		<span class="leading-loose underline">{@render children()}</span>
	{/snippet}

	{#snippet content()}
		<button
			type="button"
			class="absolute top-5 right-5 h-10 w-10"
			onclick={() => {
				openState = false;
			}}
		>
			<IconClose
				size={isLargeScreen.val ? 125 : 100}
				classes="-mt-1 -ml-1"
				colors={{ w: isDark.val ? 'var(--color-white)' : 'var(--color-primary-500)', bg: null }}
			/>
		</button>
		<div
			class="lg:text-md absolute top-10 left-0 mx-auto my-5 flex h-[93vh] w-full flex-col gap-7 overflow-y-auto p-2 pb-20 text-sm md:left-1/5 md:w-3/5 lg:top-0 lg:left-1/7 lg:w-5/7 xl:left-2/7 xl:w-3/7"
		>
			<h1 class="h1 text-center">Nur ganz kurz...</h1>
			<p class="text-lg">
				In dieses Handbook wurde sehr viel Arbeit auf freiwilliger Basis investiert. Da wir möchten,
				dass es allen zur Verfügung steht, unabhängig vom Einkommen, haben wir uns gegen einen fixen
				Kaufpreis entschieden. Dennoch sind wir auf Zustupf angewiesen, um unsere Arbeit und die
				unserer Partner*innen zu gewährleisten. Vielen Dank, dass du unser Handbook mit einer Spende
				deiner Wahl unterstützt.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-5">
				<img src="/img/qr-IBAN.png" alt="QR Code für E-Banking" class="h-30 w-30" />
				<p class="text-lg">Bezahlung per Banküberweisung: IBAN CH85 0076 9441 4721 0200 1</p>
				<p class="text-lg">Oder: Bezahlung per TWINT unter diesem ↗ <a href="https://go.twint.ch/1/e/tw?tw=acq.sGZu1zkzT0aZyvZ233nYMU8Xp1puBm-itMl-a5b6zPbGD4K0aIFr1dHETMT5592P." style="text-decoration: underline;" target="_blank">Link</a></p>
			</div>
			<!-- <p class="">Download-Optionen</p> -->
			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					class="dark:hover:border-secondary-500 dark:hover:text-primary-500 hover:bg-secondary-500 dark:hover:bg-secondary-500 flex min-w-40 justify-center rounded-full border p-0 px-4 text-lg"
					href="/pdf/New_Graphic_Standard_A_Z_Handbook.pdf"
					target="_blank">Download</a
				>
				<!-- <a
					class="dark:hover:border-secondary-500 dark:hover:text-primary-500 hover:bg-secondary-500 dark:hover:bg-secondary-500 flex min-w-40 justify-center rounded-full border p-0 px-4 text-lg"
					{href}
					target="_blank">Download PDF für Print</a
				> -->
			</div>
		</div>
	{/snippet}
</Modal>
