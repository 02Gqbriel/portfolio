<script>
	import { theme, theme_mode, style } from '../stores';

	$: t = $theme[$theme_mode];
</script>

<div id="root" style={style(t)}>
	<header>
		<a href="/">
			<h2>Gabriel<span class="headerZusatz">s portfolio</span></h2>
		</a>
		<nav>
			<a href="/projects">Projekte</a>
			<a href="/about">About Me</a>
			<a href="/contact">Contact Me</a>
			<button
				on:click={() => ($theme_mode == 'dark' ? theme_mode.set('light') : theme_mode.set('dark'))}
				>darkmode</button
			>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<span>@copyrigths Gabriel Egli</span>
	</footer>
</div>

<style>
	:global(*) {
		color: var(--color);
		background-color: var(--background);
	}

	a {
		text-decoration: none;
	}

	a:hover,
	a:hover > h2,
	a:hover > h2 > span {
		color: var(--primary);
	}

	a:active {
		color: var(-secondary);
	}

	a:focus {
		color: var(-secondary);
	}

	#root {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		padding-left: 10px;
		padding-right: 10px;
	}

	header,
	main,
	footer {
		width: 100vw;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer {
		text-align: center;
		font-size: 12.5px;
	}

	.headerZusatz {
		font-size: 1rem;
	}

	nav > a {
		margin-left: 0.5rem;
	}
</style>
