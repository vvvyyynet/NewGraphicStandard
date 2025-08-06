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
	import IconAngebot from '$lib/icons/IconAngebot.svelte';
	import IconFriends from '$lib/icons/IconFriends.svelte';
	import IconInfo from '$lib/icons/IconInfo.svelte';
	import IconToolbox from '$lib/icons/IconToolbox.svelte';

	// Special Things for large screens
	let isLargeScreen = $state();
	$effect(() => {
		isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
	});

	// function that will collapse the sidebar after interactions with links or lightswitch
	// but not for large screens!
	let closeMenu = $derived(() => {
		isExpanded = isLargeScreen ? isExpanded : false;
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
	let cl = $derived((mode: string) => {
		switch (mode) {
			case 'all':
				return {
					menu: 'min-w-[100px] bg-primary-500 transition-transition absolute z-200 h-full text-white duration-300',
					content: 'z-100 h-full transition-all duration-300',
					heading: 'transition-all duration-300',
					mainNav: 'transition-all duration-300 absolute',
					mainOl: 'transition-all duration-300 flex flex-col gap-2 lg:gap-5 place-content-center',
					mainItem:
						'transition-transform duration-300 min-h-10 lg:min-h-14 h-10 lg:h-14 flex place-content-start hover:text-secondary-500',
					mainIcon:
						'transition-transform duration-300 p-[1px] min-w-10 lg:min-w-13 h-10 w-10 lg:h-13 lg:w-13',
					mainText: 'transition-transform duration-300',
					footNav: 'ml-2 transition-transform duration-300',
					footOl: '',
					footText: 'list-nav-item h-full hover:text-secondary-500',
					abdruck: 'absolute w-10 h-10 bottom-5 text-4xl z-210'
				};
			case 'full':
				return {
					menu: 'w-full p-4',
					content: 'hidden w-0',
					heading: 'text-4xl lg:text-8xl -pt-1 p-0 m-0',
					mainNav: 'top-55 lg:top-48',
					mainOl: 'lg:flex lg:flex-row lg:gap-14',
					mainItem: 'lg:h-14',
					mainIcon: 'lg:h-14 lg:w-14 place-content-center',
					mainText: 'text-md lg:text-2xl pl-4 place-self-center',
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col text-lg',
					footText: '',
					abdruck: 'hidden'
				};
			case 'open':
				return {
					menu: 'fixed w-full lg:w-[500px] p-4 lg:border-r-2 dark:lg:border-white lg:border-white',
					content:
						'absolute lg:px-15 py-5 px-5 left-0 w-full lg:left-[500px] lg:w-[calc(100vw-500px)]',
					heading: 'text-3xl lg:text-4xl',
					mainNav: 'top-40 max-h-[calc(100vh-200px)] overflow-y-auto lg:top-[25vh] lg:w-full',
					mainOl: 'place-content-center',
					mainItem: '',
					mainIcon: 'flex flex-row place-content-start',
					mainText: 'text-xl lg:text-2xl pl-4 place-self-center text-left',
					footNav: 'absolute bottom-4',
					footOl: 'flex flex-col text-lg',
					footText: '',
					abdruck: 'right-3 lg:right-8 lg:bottom-5'
				};
			case 'closed':
				return {
					menu: 'fixed hidden lg:block md:w-[100px] p-4 lg:border-r-2 lg:dark:border-white lg:border-white',
					content:
						'absolute lg:px-15 py-5 px-5 left-0 w-full lg:left-[100px] lg:w-[calc(100vw-100px)]',
					heading: 'lg:absolute lg:-left-[1000px] lg:text-white/0 lg:text-3xs leading-tight',
					mainNav: 'top-40 max-h-[calc(100vh-200px)] overflow-y-auto lg:top-[25vh] lg:w-full',
					mainOl: 'place-content-center',
					mainItem: '',
					mainIcon: 'flex flex-row place-content-start',
					mainText: 'hidden',
					footNav: 'hidden',
					footOl: '',
					footText: '',
					abdruck: 'right-3 lg:left-8 lg:bottom-5'
				};
		}
	});

	// COLORS
	const COLOR_A_FIX = 'var(--color-secondary-500)';
	const COLOR_BG_FIX = 'var(--color-primary-500)';
	const COLOR_W_FIX = 'var(--color-white)';
	const COLOR_A_FLEX = $derived(
		isDark ? 'var(--color-secondary-500)' : 'var(--color-secondary-500)'
	);
	const COLOR_BG_FLEX = $derived(isDark ? 'var(--color-primary-500)' : 'var(--color-white)');
	const COLOR_W_FLEX = $derived(isDark ? 'var(--color-white)' : 'var(--color-primary-500)');
	const COLOR_W_FLEXFIX = $derived(isLargeScreen ? COLOR_W_FLEX : COLOR_W_FIX);

	// Safelist to prevent treeshaking (add all possible combinations here!)
	// fill-[var(--color-secondary-500)]
	// fill-[var(--color-primary-500)]
	// fill-[var(--color-white)]
	// stroke-[var(--color-secondary-500)]
	// stroke-[var(--color-primary-500)]
	// stroke-[var(--color-white)]

	$inspect(isDark);
</script>

<!-- Hamburger Trigger -->
{#if mode === 'closed'}
	<button
		onclick={() => {
			isExpanded = true;
		}}
		class={['fixed top-5 right-5 z-1000 h-9 lg:hidden lg:h-12']}
	>
		<IconMenu size={100} colors={{ w: COLOR_W_FLEX, bg: COLOR_BG_FLEX }} />
	</button>
{/if}

<!-- Sidebar -->
<div class={[cl('all').menu, cl(mode).menu]}>
	<!-- Menu -->
	{#if mode !== 'full'}
		<!-- Chevron -->
		<button
			class={['absolute top-5 right-5 lg:right-7']}
			onclick={() => {
				isExpanded = !isExpanded;
			}}
		>
			{#if isExpanded}
				<IconClose
					size={100}
					classes="h-9 lg:h-12 lg:hidden"
					colors={{ w: COLOR_W_FIX, bg: COLOR_BG_FIX }}
				/>
				<IconChevronLeft
					classes="hidden h-9 lg:h-12 lg:block"
					size={100}
					colors={{ w: COLOR_W_FIX, bg: COLOR_BG_FIX }}
				/>
			{:else}
				<IconChevronRight
					classes="hidden h-9 lg:h-12 lg:block"
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
			classes="fixed h-9 top-18 right-5 lg:h-12 lg:top-4 lg:right-4"
			colors={{ bg: COLOR_BG_FLEX, w: COLOR_W_FLEX, x: COLOR_W_FLEXFIX }}
		/>
	{/if}

	<!-- Title -->
	<div class="grid grid-cols-[auto_80px]">
		<h1>
			<a class={[cl('all').heading, cl(mode).heading]} href="/"
				>New Graphic{#if mode !== 'full'}<br />{/if} Standard</a
			>
		</h1>
	</div>

	<!-- Main Menu -->
	<nav class={[cl('all').mainNav, cl(mode).mainNav]}>
		<ol class={[cl('all').mainOl, cl(mode).mainOl]}>
			{#each pages as page}
				{#if page.menu === 'main'}
					<li>
						<a
							href={`${base}${page.slug}`}
							onclick={closeMenu}
							class={[
								cl('all').mainItem,
								cl(mode).mainItem,
								!checkActive(page.slug) && `hover:[&_.circ]:stroke-[var(--color-secondary-500)]`,
								!checkActive(page.slug) && `hover:[&_.fig]:fill-[var(--color-secondary-500)]`
							]}
						>
							<span class={[cl('all').mainIcon, cl(mode).mainIcon]}
								><page.icon
									classes={[checkActive(page.slug) && 'hover:cursor-default', '']}
									size={100}
									isActive={checkActive(page.slug)}
									colors={{
										a: COLOR_A_FIX,
										w: COLOR_W_FIX,
										bg: COLOR_BG_FIX
									}}
								/></span
							>
							<span
								class={[
									cl('all').mainText,
									cl(mode).mainText,
									checkActive(page.slug) ? 'text-secondary-500' : ''
								]}>{page.name}</span
							>
						</a>
					</li>
				{/if}
			{/each}
		</ol>
	</nav>

	<!-- Footer Menu -->
	<nav class={[cl('all').footNav, cl(mode).footNav]}>
		<ol class={[cl('all').footOl, cl(mode).footOl]}>
			{#each pages as page}
				{#if page.menu === 'footer'}
					<li>
						<a
							href={`${base}${page.slug}`}
							onclick={closeMenu}
							class={[
								cl('all').footText,
								cl(mode).footText,
								checkActive(page.slug) ? 'text-secondary-500' : ''
							]}>{page.name}</a
						>
					</li>
				{/if}
			{/each}
		</ol>
	</nav>

	<!-- CO2 Button -->
	{#if mode == 'full'}
		{@const rand = Math.floor(Math.random() * 3 + 1)}
		<a href="/abdruck" onclick={closeMenu} class={[cl('all').abdruck, cl(mode).abdruck]}>
			{#if rand == 1}<span>🌍</span>
			{:else if rand == 2}<span>🌎</span>
			{:else if rand == 3}<span>🌏</span>
			{:else}
				<span>{rand}</span>
			{/if}
		</a>
		<Co2Popup classes="fixed right-6 bottom-6 z-220 hidden lg:block" />
	{:else if route !== '/abdruck'}
		{@const rand = Math.floor(Math.random() * 3 + 1)}
		<a href="/abdruck" onclick={closeMenu} class={['', cl('all').abdruck, cl(mode).abdruck]}>
			{#if rand == 1}<span>🌍</span>
			{:else if rand == 2}<span>🌎</span>
			{:else if rand == 3}<span>🌏</span>
			{:else}
				<span>{rand}</span>
			{/if}
		</a>
	{/if}
</div>

<div class={[cl('all').content, cl(mode).content]}>
	{@render children()}
</div>
