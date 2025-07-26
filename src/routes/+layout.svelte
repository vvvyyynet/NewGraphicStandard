<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import Co2Popup from '$lib/components/CO2Popup.svelte';
	import IconChevronRight from '$lib/icons/IconChevronRight.svelte';
	import IconChevronLeft from '$lib/icons/IconChevronLeft.svelte';
	import IconMenu from '$lib/icons/IconMenu.svelte';
	import IconClose from '$lib/icons/IconClose.svelte';
	import IconLightswitch1 from '$lib/icons/IconLightswitch1.svelte';
	import IconLightswitch2 from '$lib/icons/IconLightswitch2.svelte';
	import IconAngebot from '$lib/icons/IconAngebot.svelte';
	import IconFriends from '$lib/icons/IconFriends.svelte';
	import IconInfo from '$lib/icons/IconInfo.svelte';
	import IconToolbox from '$lib/icons/IconToolbox.svelte';

	let isLargeScreen = $state();
	$effect(() => {
		isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
	});

	let isDark = $state(false);
	let { children } = $props();
	let route = $derived(page.url.pathname);
	const pages = [
		{ menu: 'main', name: 'Info', slug: '/info', icon: IconInfo },
		{ menu: 'main', name: 'Angebot', slug: '/angebot', icon: IconAngebot },
		{ menu: 'main', name: 'Toolbox', slug: '/toolbox', icon: IconToolbox },
		{ menu: 'main', name: 'Friends', slug: '/friends', icon: IconFriends },
		{ menu: 'footer', name: 'Kontakt', slug: '/kontakt', icon: null },
		{ menu: 'footer', name: 'Unterstütze uns!', slug: '/support', icon: null },
		{ menu: 'footer', name: 'Impressum', slug: '/impressum', icon: null }
	];

	let isExpanded = $state(true);
	let mode = $derived(route === '/' ? 'full' : isExpanded ? 'open' : 'closed');

	// Classlists for active routes
	let checkActive = $derived((slug: string) => {
		return route.includes(slug) ? true : false;
	});

	// Class for circular buttons
	const circleClass = 'flex h-10 w-10 items-center justify-center rounded-full border-1';

	// Classlists for each mode
	let cl = $derived((mode: string, slug: string = '') => {
		switch (mode) {
			case 'full':
				return {
					menu: 'w-full p-3',
					content: 'hidden w-0',
					heading: 'text-5xl lg:text-8xl leading-tight',
					mainNav: 'mt-10',
					mainOl: 'flex flex-col gap-5 lg:flex lg:flex-row lg:gap-14',
					mainItem: 'flex place-content-start hover:text-secondary-500',
					mainIcon: 'h-8 lg:h-14 place-content-center',
					mainText: 'lg:text-3xl text-2xl pl-3 place-self-center',
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col text-lg',
					footText: 'hover:text-secondary-500',
					co2: 'absolute bottom-5 right-5 lg:right-10 lg:bottom-10 lg:block text-3xl'
				};
			case 'open':
				return {
					menu: 'fixed w-full lg:w-[500px] p-6 lg:border-r-2 dark:lg:border-white lg:border-white',
					content:
						'absolute lg:px-15 py-5 px-5 left-0 w-full lg:left-[500px] lg:w-[calc(100vw-500px)]',
					heading: 'text-5xl leading-tight',
					mainNav: 'absolute top-48 lg:w-full',
					mainOl: 'flex flex-col gap-5 place-content-center',
					mainItem: 'h-10 flex hover:text-secondary-500',
					mainIcon: 'h-full flex flex-row place-content-start',
					mainText: 'text-2xl pl-10 text-3xl place-self-start text-left'.concat(
						' ',
						checkActive(slug) ? 'text-secondary-500' : ''
					),
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col gap-2 text-xl',
					footText: 'hover:text-secondary-500'.concat(
						' ',
						checkActive(slug) ? 'text-secondary-500' : ''
					),
					co2: 'absolute bottom-5 right-3 lg:right-8 lg:bottom-5 text-3xl'
				};
			case 'closed':
				return {
					menu: 'fixed hidden lg:block md:w-[100px] p-6 lg:border-r-2 lg:dark:border-white lg:border-white',
					content:
						'absolute lg:px-15 py-5 px-5 left-0 w-full lg:left-[100px] lg:w-[calc(100vw-100px)]',
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
					menu: '',
					content: '',
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

	const closeMenu = () => {
		// on small screens set isExpanded to false
		isExpanded = isLargeScreen ? isExpanded : false;
	};
	const COLOR_ACTIVE_FIX = 'var(--color-secondary-500)';
	const COLOR_BG_FIX = 'var(--color-primary-500)';
	const COLOR_W_FIX = 'white';
	const COLOR_ACTIVE_FLEX = $derived(
		isDark ? 'var(--color-secondary-500)' : 'var(--color-secondary-500)'
	);
	const COLOR_BG_FLEX = $derived(isDark ? 'var(--color-primary-500)' : 'white');
	const COLOR_W_FLEX = $derived(isDark ? 'white' : 'var(--color-primary-500)');

	$inspect(isDark);
</script>

<!-- Hamburger Trigger -->
{#if mode === 'closed'}
	<button
		onclick={() => {
			isExpanded = true;
		}}
		class={['fixed h-12 top-5 right-5 z-1000 lg:hidden']}
	>
		<IconMenu size={100} colors={{ w: COLOR_W_FLEX, bg: COLOR_BG_FLEX }} />
	</button>
{/if}

<!-- Sidebar -->
<div
	class={[
		'bg-primary-500 transition-transition absolute z-200 h-full text-white duration-300',
		cl(mode).menu
	]}
>
	<!-- Menu -->
	{#if mode !== 'full'}
		<button
			class={['absolute top-5 right-5 lg:right-7']}
			onclick={() => {
				isExpanded = !isExpanded;
			}}
		>
			{#if isExpanded}
				<IconClose
					size={100}
					classes="h-12 lg:hidden"
					colors={{ w: COLOR_W_FIX, bg: COLOR_BG_FIX }}
				/>
				<IconChevronLeft
					classes="hidden h-12 lg:block"
					size={100}
					colors={{ w: COLOR_W_FIX, bg: COLOR_BG_FIX }}
				/>
			{:else}
				<IconChevronRight
					classes="hidden h-12 lg:block"
					size={100}
					colors={{ w: COLOR_W_FIX, bg: COLOR_BG_FIX }}
				/>
			{/if}
		</button>
	{/if}

	<!-- Light Switch -->
	{#if route !== '/'}
		<LightSwitch
			bind:isDark
			callback={closeMenu}
			classes="fixed h-12 top-20 right-5 lg:top-4 lg:right-4"
			colors={{ bg: COLOR_BG_FLEX, w: COLOR_W_FLEX }}
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
				{#if page.menu === 'main'}
					<li>
						<a
							href={`${base}${page.slug}`}
							onclick={closeMenu}
							class={['transition-transform duration-300', cl(mode).mainItem]}
						>
							<span class={['transition-transform duration-300', cl(mode).mainIcon]}
								><page.icon
									classes={[checkActive(page.slug) && 'hover:cursor-default', '']}
									size={100}
									isActive={checkActive(page.slug)}
									colors={{
										a: COLOR_ACTIVE_FIX,
										w: COLOR_W_FIX,
										bg: COLOR_BG_FIX
									}}
								/></span
							>
							<span class={['transition-transform duration-300', cl(mode, page.slug).mainText]}
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
				{#if page.menu === 'footer'}
					<li>
						<a
							href={`${base}${page.slug}`}
							onclick={closeMenu}
							class={['list-nav-item m-4 h-full', cl(mode, page.slug).footText]}>{page.name}</a
						>
					</li>
				{/if}
			{/each}
		</ol>
	</nav>

	<!-- CO2 Button -->
	{#if mode == 'full'}
		<a href="/co2" class={['z-210', cl(mode).co2]}><span>🌍</span></a>
		<Co2Popup classes="fixed right-6 bottom-6 z-220 hidden lg:flex" />
	{:else if route !== '/co2'}
		<a href="/co2" class={['', cl(mode).co2]}><span>🌍</span></a>
	{/if}
</div>

<div class={['z-100 h-full transition-all duration-300', cl(mode).content]}>
	{@render children()}
</div>
