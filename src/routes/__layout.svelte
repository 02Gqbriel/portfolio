<script>
	import '../app.css';
	import { theme, theme_mode as tm, style } from '../stores';

	$: t = $theme[$tm];
</script>

<div id="root" class="flex flex-col justify-between min-h-screen py-3" style={style(t)}>
	<header class="flex justify-between items-center mt-2">
		<a href="/" class="font-bold text-2xl">
			<h2>Gabriel&apos;<span class="text-xs">s portfolio</span></h2>
		</a>
		<nav class="flex items-center justify-between w-[17.5vw]">
			<a href="/projects">Projekte</a>
			<a href="/about">About Me</a>
			<a href="/contact">Contact Me</a>

			<img
				src={'/icons/' + ($tm == 'dark' ? 'sun.svg' : 'moon.svg')}
				class="w-7 hover:w-8 active:w-7"
				alt=""
				on:click={() => {
					tm.set($tm == 'dark' ? 'light' : 'dark');
				}}
			/>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer class="text-center text-xs">
		<span>@copyrigths Gabriel Egli</span>
	</footer>
</div>

<style>
	:global(*) {
		color: var(--color);
		background-color: var(--background);
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

	header,
	main,
	footer {
		width: 75vw;
		min-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
