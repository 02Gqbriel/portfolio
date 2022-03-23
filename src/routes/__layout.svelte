<script>
	import { writable } from 'svelte/store';

	export const namer = writable('Gabriel');
</script>

<div id="root">
	<header>
		<a href="/">
			<h2>Gabriel<span class="headerZusatz">s portfolio</span></h2>
		</a>
		<nav>
			<a href="/projects">Projekte</a>
			<a href="/about">About Me</a>
			<a href="/contact">Contact Me</a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<span>footer</span>
	</footer>
</div>

<style>
	* {
		font-family: 'Poppins', sans-serif;
		color: #e1e8eb;
	}

	a {
		text-decoration: none;
	}

	a:hover,
	a:hover > h2,
	a:hover > h2 > span {
		color: #ffc107;
	}

	#root {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		margin-left: 10px;
		margin-right: 10px;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.headerZusatz {
		font-size: 1rem;
	}

	nav > a {
		margin-left: 0.5rem;
	}
</style>
