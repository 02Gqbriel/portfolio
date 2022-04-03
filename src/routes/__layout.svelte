<script>
	import '../app.css';
	import { theme, theme_mode as tm, style } from '../stores';
	import HamburgerSvg from '../components/HamburgerSvg.svelte';
	import moon from '$lib/icons/moon.svg';
	import sun from '$lib/icons/sun.svg';

	$: t = $theme[$tm];
	$: menuOpen = false;

	let width, height;
</script>

<svelte:window bind:innerWidth={width} bind:outerWidth={width} />

<div id="root" class="flex flex-col justify-between min-h-screen py-3 opacity-95" style={style(t)}>
	<header class="flex justify-between items-center mt-2 h-10">
		<a href="/" class="font-bold text-2xl hover:text-3xl">
			<h2>
				Gabriel{#if width > 700}<span class="text-base">{' '}Egli</span>{/if}
			</h2>
		</a>
		{#if width > 700}
			<nav class="flex items-center justify-between w-80">
				<a href="/projects">Projekte</a>
				<a href="/about">About Me</a>
				<a href="/contact">Contact Me</a>
				<img
					src={$tm == 'dark' ? sun : moon}
					class="w-7 hover:w-8 active:w-7 cursor-pointer"
					alt=""
					on:click={() => {
						tm.set($tm == 'dark' ? 'light' : 'dark');
					}}
				/>
			</nav>
		{:else}
			<nav>
				<div on:click={() => (menuOpen = !menuOpen)}>
					<HamburgerSvg />
				</div>
				{#if menuOpen}
					<div
						on:click={() => (menuOpen = !menuOpen)}
						class="z-10 absolute left-0 right-0 top-0 bottom-0 opacity-0"
					>
						overlay
					</div>
				{/if}
				<div
					style={`background-color: ${t.darkbackgroundColor};`}
					class="menu + {menuOpen ? 'menuOpen' : 'menuClosed'}"
				>
					<a
						on:click={() => (menuOpen = !menuOpen)}
						class="transition-none bg-transparent"
						href="/projects">Projekte</a
					>
					<a
						on:click={() => (menuOpen = !menuOpen)}
						class="transition-none bg-transparent"
						href="/about">About Me</a
					>
					<a
						on:click={() => (menuOpen = !menuOpen)}
						class="transition-none bg-transparent"
						href="/contact">Contact Me</a
					>
					<img
						src={'/icons/' + ($tm == 'dark' ? 'sun.svg' : 'moon.svg')}
						class="w-7 hover:w-8 active:w-7 cursor-pointer"
						alt=""
						on:click={() => {
							tm.set($tm == 'dark' ? 'light' : 'dark');
						}}
					/>
				</div>
			</nav>
		{/if}
	</header>
	<main>
		<slot />
	</main>
	<footer class="text-center text-xs">
		<span>@copyrights Gabriel Egli</span>
	</footer>
</div>

<style>
	:global(*) {
		color: var(--color);
		background: var(--background);
		transition: all 0.25s ease-in-out;
	}

	a {
		display: inline-block;
	}

	a:active {
		color: var(--primary);
	}

	nav > a::after {
		content: '';
		width: 0px;
		height: 1.5px;
		display: block;
		background: var(--primary);
		transition: 300ms;
	}

	a:hover::after {
		width: 100%;
	}

	a:focus {
		color: var(-secondary);
	}

	.menu {
		position: fixed;
		transition: all 0.25s ease-in-out;
		transition: right 750ms ease-in-out;
		height: 100vh;
		padding: 10px;
		width: 40vw;
		top: 0;
		z-index: 11;
	}

	.menuOpen {
		right: 0vw;
	}

	.menuClosed {
		right: -40vw;
	}

	header,
	main,
	footer {
		width: 100vw;
		max-width: 1000px;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
