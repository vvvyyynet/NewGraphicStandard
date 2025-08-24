<script>
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { X } from 'lucide-svelte';
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
	backdropBackground="bg-primary-100/70"
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
			}}><X class="text-white" size={40} /></button
		>
		<div
			class="lg:text-md absolute top-10 left-0 my-5 flex h-[93vh] w-full flex-col gap-7 overflow-y-auto p-10 pb-20 text-sm lg:top-0 lg:left-1/4 lg:w-3/5"
		>
			<div class="flex items-center justify-center gap-5">
				<img src="/img/coffee.png" alt="Kaffeetasse" class="h-10 w-10" />
				<h1 class="h2">Nur ganz kurz...</h1>
			</div>
			<p class="">
				In dieses Handbook wurde sehr viel Arbeit auf freiwilliger Basis investiert. Da wir möchten,
				dass es allen zur Verfügung steht, unabhängig vom Einkommen, haben wir uns gegen einen fixen
				Kaufpreis entschieden. Dennoch sind wir auf Zustupfe angewiesen, um unsere Arbeit und die
				unserer Partner*innen zu gewährleisten. Vielen Dank, dass du unser Handbook mit einer Spende
				deiner Wahl unterstützt.
			</p>

			<div class="flex flex-wrap items-end gap-5">
				<img src="/img/qr-twint.png" alt="QR Code für Twint" class="h-30 w-30" />
				<p class="">Oder: IBAN CH85 0076 9441 4721 0200 1</p>
			</div>
			<!-- <p class="">Download-Optionen</p> -->
			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					class="dark:hover:border-secondary-500 dark:hover:text-secondary-500 hover:bg-secondary-500 dark:hover:bg-primary-500 flex min-w-40 justify-center rounded-full border p-0 px-4 text-lg"
					{href}
					target="_blank">Download E-PDF</a
				>
				<a
					class="dark:hover:border-secondary-500 dark:hover:text-secondary-500 hover:bg-secondary-500 dark:hover:bg-primary-500 flex min-w-40 justify-center rounded-full border p-0 px-4 text-lg"
					{href}
					target="_blank">Download PDF für Print</a
				>
			</div>
		</div>
	{/snippet}
</Modal>
