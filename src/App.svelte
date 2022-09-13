<script>
	import { onMount } from 'svelte';

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

	const scrollEvent = (e) => {
		const s = Math.ceil(window.scrollY - window.screenY),
			m = document.documentElement.offsetHeight - document.documentElement.clientHeight;

		const p = Math.round((100 / m) * s);

		const px = Math.round((window.innerWidth / 100) * p);

		scrollElement.style.width = px + 'px';
	};
</script>

<svelte:window on:scroll={scrollEvent} />

<header class="h-screen">
	<img class="absolute -z-10 left-0 top-0 h-screen w-screen" src="/zuerich.jpg" alt="" />
	<div class="absolute -z-10 left-0 top-0 w-screen h-screen backdrop-blur-sm" />

	<h1 class="font-title text-7xl text-white h-max w-fit p-4 py-8 -my-5">gabriel egli</h1>
</header>

<main class="grow my-1 p-1">
	<section class="min-h-screen flex justify-around items-center" id="about">
		<div class="h-min">
			<h1>HEllo</h1>
		</div>
		<div class="h-min bg-slate-600 rounded-sm transform-gpu skew-x-1 skew-y-6">
			<img src="/me.jpg" alt="" class="max-w-xs rounded transform-gpu " />
		</div>
	</section>
	<section class="min-h-screen" id="projects">projects</section>
	<section class="min-h-screen" id="contact">contact</section>
</main>

<footer class="p-1">footer</footer>

<div class="fixed -top-1 left-0 right-0 h-1.5">
	<div
		class="h-1.5 bg-zinc-700 shadow-sm dark:shadow-white dark:bg-slate-100 shadow-black"
		bind:this={scrollElement}
	/>
</div>
