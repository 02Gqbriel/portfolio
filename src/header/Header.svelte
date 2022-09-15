<script lang="ts">
	import { onMount } from 'svelte';
	import { map } from '../util';
	import Navigation from './Navigation.svelte';

	let title: HTMLHeadingElement = null,
		done = false,
		pastHeader = false,
		mobile = window.innerWidth < 768,
		top = true;

	onMount(() => {
		title.style.position = 'fixed';
		pastHeader = window.innerHeight - 30 < window.scrollY;
		setTitleSize();
		setTitlePostion();

		top = window.scrollY < 20;

		setTimeout(() => {
			setTitleSize();
			setTitlePostion();
			done = true;
		}, 500);
	});

	function scroll() {
		pastHeader = window.innerHeight - 30 < window.scrollY;
		setTitleSize();
		setTitlePostion();
		top = window.scrollY < 20;
	}

	function setTitleSize() {
		if (title == null) return;

		if (window.scrollY == 0)
			return (title.style.fontSize =
				(0.3 * window.innerHeight + 0.3 * window.innerWidth) / 5 + 'px');

		let resultBuffer = -map(0, window.innerHeight, -1, 0, window.scrollY);

		let mapped = resultBuffer < 0 ? 0 : resultBuffer;

		resultBuffer = 5 / mapped;

		title.style.fontSize =
			(0.3 * window.innerHeight + 0.3 * window.innerWidth) /
				(resultBuffer > 15 ? 15 : resultBuffer) +
			'px';
	}

	function setTitlePostion() {
		if (title == null) return;

		if (window.scrollY == 0)
			return (
				(title.style.left = (window.innerWidth - title.clientWidth) / 2 + 'px'),
				(title.style.top = (window.innerHeight - title.clientHeight) / 2 + 'px')
			);

		//* top
		let maxTop = (window.innerHeight - title.clientHeight) / 2 - 10,
			minTop = 5;

		let mappedTop = Math.round(
			-map(0, window.innerHeight, -maxTop, -minTop, window.scrollY)
		);

		if (minTop + 1 > mappedTop) mappedTop = minTop;
		if (maxTop - 1 < mappedTop) mappedTop = maxTop;

		title.style.top = mappedTop + 'px';

		//* left
		let maxLeft = (window.innerWidth - title.clientWidth) / 2,
			minLeft = mobile ? 0 : 10;

		let mappedLeft = Math.round(
			-map(0, window.innerHeight, -maxLeft, -minLeft, window.scrollY)
		);

		//title.style.width = window.innerWidth - mappedLeft * 2 + 'px';

		if (minLeft + 1 >= mappedLeft) mappedLeft = minLeft;
		if (maxLeft - 1 <= mappedLeft) mappedLeft = maxLeft;

		title.style.left = mappedLeft + 'px';
	}
</script>

<svelte:window on:scroll={scroll} on:resize={scroll} />

<header id="home" class="h-screen">
	<img
		class="absolute -z-10 left-0 top-0 h-screen w-full object-cover select-none"
		src="/zuerich.jpg"
		alt=""
	/>
	<div class="absolute -z-10 left-0 top-0 w-screen h-screen backdrop-blur-sm" />

	{#if pastHeader}
		<div class="fixed left-0 right-0 top-0 md:h-16 h-14 bg-white dark:bg-zinc-700 z-0" />
	{/if}

	<h1
		bind:this={title}
		id="title"
		class="{done ? 'opacity-100' : 'opacity-0'} {pastHeader
			? 'text-slate-700 dark:text-white'
			: 'text-white'} duration-500 ease-in-out transition-opacity font-title text-6xl h-max w-fit p-3 md:px-5 md:pb-6"
	>
		gabriel egli
	</h1>

	<Navigation {pastHeader} />

	{#if top}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="w-6 h-6 animate-bounce absolute left-[50%] -translate-x-[50%] bottom-3 fill-white"
		>
			<path
				fill-rule="evenodd"
				d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</header>
