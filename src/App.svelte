<script>
	import { onMount } from 'svelte';
	import About from './about/About.svelte';
	import Footer from './footer/Footer.svelte';
	import Header from './header/Header.svelte';
	import Carousel from './lang_carousel/Carousel.svelte';

	let scrollElement = null;

	onMount(() => {
		scrollEvent();
	});

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

<main class="grow my-1 p-1 flex flex-col space-y-24 md:space-y-32">
	<h2 id="about" class="text-center font-medium text-2xl mt-10 underline py-1">
		About me
	</h2>
	<About />

	<Carousel />

	<h2
		id="projects"
		class="text-center font-medium text-2xl my-10 underline py-1"
	>
		Projects
	</h2>

	<section>projects</section>

	<h2
		id="contact"
		class="text-center font-medium text-2xl my-10 underline py-1"
	>
		Contact me
	</h2>
	<section>contact</section>
</main>

<Footer />

<div class="fixed -top-1 left-0 right-0 h-1.5">
	<div
		class="h-1.5 bg-zinc-700 shadow-sm dark:shadow-white dark:bg-slate-100 shadow-black"
		bind:this={scrollElement}
	/>
</div>
