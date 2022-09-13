<script>
	import { onMount } from 'svelte';
	import About from './about/About.svelte';
	import Footer from './footer/Footer.svelte';
	import Header from './header/Header.svelte';

	let dark = localStorage.getItem('dark') === 'true' ?? false;
	let menuOpen = localStorage.getItem('menuOpen') === 'true' ?? false;

	let scrollElement = null;

	onMount(() => {
		scrollEvent();
	});

	const setDarkmode = () => {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('dark', (!dark).toString());
		return (dark = !dark);
	};

	const scrollEvent = e => {
		const s = Math.ceil(window.scrollY - window.screenY),
			m =
				document.documentElement.offsetHeight -
				document.documentElement.clientHeight;

		const p = Math.round((100 / m) * s);

		const px = Math.round((window.innerWidth / 100) * p);

		scrollElement.style.width = px + 'px';
	};
</script>

<svelte:window on:scroll={scrollEvent} />

<Header />

<main class="grow my-1 p-1">
	<About />

	<section class="min-h-screen" id="projects">projects</section>
	<section class="min-h-screen" id="contact">contact</section>
</main>

<Footer />

<div class="fixed -top-1 left-0 right-0 h-1.5">
	<div
		class="h-1.5 bg-zinc-700 shadow-sm dark:shadow-white dark:bg-slate-100 shadow-black"
		bind:this={scrollElement}
	/>
</div>
