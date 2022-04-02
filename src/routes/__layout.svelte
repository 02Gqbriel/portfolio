<script>
	import '../app.css';
	import { theme, theme_mode as tm, style } from '../stores';

	$: t = $theme[$tm];
</script>

<div id="root" class="flex flex-col justify-between min-h-screen py-3 opacity-95" style={style(t)}>
	<header class="flex justify-between items-center mt-2 h-10">
		<a href="/" class="font-bold text-2xl hover:text-3xl">
			<h2>Gabriel<span class="text-base">{' '}Egli</span></h2>
		</a>
		<nav class="flex items-center justify-between w-44">
			<a href="/projects">Projekte</a>
			<a href="/about">About Me</a>
			<a href="/contact">Contact Me</a>

			<img
				src={'/icons/' + ($tm == 'dark' ? 'sun.svg' : 'moon.svg')}
				class="w-7 hover:w-8 active:w-7 cursor-pointer"
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
		<span>@copyrights Gabriel Egli</span>
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
