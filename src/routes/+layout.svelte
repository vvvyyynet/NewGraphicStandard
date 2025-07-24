<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import Co2Popup from '$lib/components/CO2Popup.svelte';
	import { ChevronRight, ChevronLeft, X, Ellipsis } from 'lucide-svelte';
	import { Heart, Stars, ToolCase, Info } from 'lucide-svelte';

	let { children } = $props();
	let route = $derived(page.url.pathname);
	const pages = [
		{ set: 'main', name: 'Info', path: '/info', icon: Info },
		{ set: 'main', name: 'Angebot', path: '/angebot', icon: Stars },
		{ set: 'main', name: 'Toolbox', path: '/toolbox', icon: ToolCase },
		{ set: 'main', name: 'Friends', path: '/friends', icon: Heart },
		{ set: 'footer', name: 'Kontakt', path: '/kontakt', icon: null },
		{ set: 'footer', name: 'Unterstütze uns!', path: '/support', icon: null },
		{ set: 'footer', name: 'Impressum', path: '/impressum', icon: null }
	];

	let isExpanded = $state(true);
	let mode = $derived(route === '/' ? 'full' : isExpanded ? 'open' : 'closed');

	// Classlists for active routes
	let checkActive = $derived((path: string) => {
		return (base + route).includes(path) ? true : false;
	});

	// Class for circular buttons
	const circleClass = 'flex h-10 w-10 items-center justify-center rounded-full border-1';

	// Classlists for each mode
	let cl = $derived((mode: string, path: string = '') => {
		switch (mode) {
			case 'full':
				return {
					container: 'grid grid-cols-[1fr_0fr]',
					menu: 'p-3',
					content: 'hidden',
					expander: '',
					heading: 'text-5xl lg:text-8xl leading-tight',
					mainNav: 'mt-10',
					mainOl: 'flex flex-col gap-5 lg:flex lg:flex-row lg:gap-14',
					mainItem: 'flex place-content-start hover:text-secondary-500',
					mainIcon: 'w-10 h-10 place-content-center',
					mainText: 'text-2xl pl-3 place-self-center',
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col text-lg',
					footText: 'hover:text-secondary-500',
					co2: 'absolute bottom-5 right-5 z-10 lg:right-10 lg:bottom-10 lg:block text-3xl'
				};
			case 'open':
				return {
					container: 'absolute grid grid-cols-[0fr_auto] lg:grid-cols[100px_auto]',
					menu: 'p-6',
					content: '',
					expander: '',
					heading: 'text-3xl leading-tight',
					mainNav: 'absolute top-48',
					mainOl: 'flex flex-col gap-5 place-content-center',
					mainItem: 'h-10 flex hover:text-secondary-500',
					mainIcon: 'h-full flex flex-row place-content-start',
					mainText: 'text-2xl pl-10 text-3xl place-self-start text-left'.concat(
						' ',
						checkActive(path) ? 'text-secondary-500' : ''
					),
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col gap-2 text-xl',
					footText: 'hover:text-secondary-500'.concat(
						' ',
						checkActive(path) ? 'text-secondary-500' : ''
					),
					co2: 'absolute bottom-5 right-3 lg:right-8 lg:bottom-5 text-3xl'
				};
			case 'closed':
				return {
					container: 'grid grid-cols-[0fr_auto] lg:grid-cols-[86px_auto]',
					menu: 'hidden lg:block md:w-22 p-6',
					content: '',
					expander: '',
					heading: 'hidden',
					mainNav: 'absolute top-48',
					mainOl: 'flex flex-col gap-5 place-content-center',
					mainItem: 'h-10 flex place-content-start',
					mainIcon: 'w-full h-full flex flex-row place-content-center',
					mainText: 'hidden',
					footNav: 'hidden',
					footOl: '',
					footText: '',
					co2: 'absolute bottom-5 right-3 lg:left-8 lg:bottom-5 text-3xl'
				};
			default:
				return {
					container: '',
					menu: '',
					content: '',
					expander: '',
					heading: '',
					mainNav: 'absolute top-30 text-2xl',
					mainOl: '',
					mainItem: '',
					mainText: '',
					mainIcon: '',
					footNav: '',
					footOl: '',
					footText: '',
					co2: ''
				};
		}
	});
</script>

<!-- Hamburger Trigger -->
{#if mode === 'closed'}
	<button
		onclick={() => {
			isExpanded = true;
		}}
		class={[circleClass, 'fixed top-5 right-5 lg:hidden']}
	>
		<Ellipsis size={30} />
	</button>
{/if}

<!-- Grid Container -->
<div class={['absolute w-full h-full', cl(mode).container]}>
	<!-- Menu (Sidebar or Fullscreen) -->
	<div
		class={['w-full h-full bg-primary-500 text-white transition-all duration-300', cl(mode).menu]}
	>
		<!-- Expanding Menu -->
		{#if mode !== 'full'}
			<button
				class={'absolute top-5 right-5 lg:right-3'}
				onclick={() => {
					isExpanded = !isExpanded;
				}}
			>
				{#if isExpanded}
					<div class={[circleClass, 'fixed top-5 right-5 lg:hidden']}>
						<X size={40} />
					</div>
					<div class={['hidden lg:block', cl(mode).expander]}>
						<ChevronLeft size={70} />
					</div>
				{:else}
					<div class={['hidden lg:block', cl(mode).expander]}>
						<ChevronRight size={70} />
					</div>
				{/if}
			</button>
		{/if}

		<!-- Light Switch -->
		{#if route !== '/'}
			<LightSwitch
				classes={circleClass.concat(
					' ',
					'lg:text-black text-white fixed top-17 right-5 lg:top-4 lg:right-4'
				)}
			/>
		{/if}

		<!-- Title -->
		<div class="grid grid-cols-[auto_80px]">
			<h1>
				<a class={['transition-all duration-300', cl(mode).heading]} href="/"
					>New Graphic{#if mode !== 'full'}<br />{/if} Standard</a
				>
			</h1>
		</div>

		<!-- Main Menu -->
		<nav class={['transition-all duration-300', cl(mode).mainNav]}>
			<ol class={['transition-all duration-300', cl(mode).mainOl]}>
				{#each pages as page}
					{#if page.set === 'main'}
						<li>
							<a
								href={`${base}${page.path}`}
								onclick={() => {
									const mediaQuery = window.matchMedia('(min-width: 1024px)');
									if (!mediaQuery.matches) {
										isExpanded = false;
									}
								}}
								class={['transition-transform duration-300', cl(mode).mainItem]}
							>
								<span class={['transition-transform duration-300', cl(mode).mainIcon]}
									><page.icon
										size="h-full"
										color={checkActive(page.path) ? 'var(--color-secondary-500)' : 'white'}
									/></span
								>
								<span class={['transition-transform duration-300', cl(mode, page.path).mainText]}
									>{page.name}</span
								>
							</a>
						</li>
					{/if}
				{/each}
			</ol>
		</nav>

		<!-- Footer Menu -->
		<nav class={['transition-transform duration-300', cl(mode).footNav]}>
			<ol class={['', cl(mode).footOl]}>
				{#each pages as page}
					{#if page.set === 'footer'}
						<li>
							<a
								href={`${base}${page.path}`}
								class={['list-nav-item m-4 h-full', cl(mode, page.path).footText]}>{page.name}</a
							>
						</li>
					{/if}
				{/each}
			</ol>
		</nav>

		<!-- CO2 Button -->
		{#if mode == 'full'}
			<Co2Popup classes="fixed right-6 bottom-6 z-100 hidden lg:flex" />
			<a href="/co2" class={['z-10', cl(mode).co2]}><span>🌍</span></a>
		{:else}
			<a href="/co2" class={['', cl(mode).co2]}><span>🌍</span></a>
		{/if}
	</div>

	<!-- Content -->
	<div class={['w-full h-full', cl(mode).content]}>
		{@render children()}
	</div>
</div>
