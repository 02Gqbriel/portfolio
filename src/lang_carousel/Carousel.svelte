<script>
	import { onMount } from 'svelte';

	const path = filename => `/langs/${filename}.svg`;
	let container;
	let files = [
		'cpp',
		'css',
		'express',
		'fileZilla',
		'git',
		'html',
		'java',
		'js',
		'mongodb',
		'next',
		'node',
		'php',
		'python',
		'react',
		'svelte',
		'tailwind',
		'ts',
	];
</script>

<div bind:this={container} class="flex w-max relative">
	<div
		id="container1"
		class="min-w-full justify-around flex will-change-transform"
	>
		{#each files as file, i}
			<img
				src={path(file)}
				alt=""
				id="icons"
				class="flex-shrink-0 w-20 hover:grayscale-0 grayscale transition-transform p-1 rounded-md"
			/>
		{/each}
	</div>
	<div
		id="container2"
		class="min-w-full justify-around flex will-change-transform"
	>
		{#each files as file, i}
			<img
				src={path(file)}
				alt=""
				id="icons"
				class="flex-shrink-0 w-20 hover:grayscale-0 grayscale transition-transform p-1 rounded-md"
			/>
		{/each}
	</div>

	<div
		id="banner"
		class="absolute max-w-screen-xl left-0 w-[95vw] md:w-full top-0 bottom-0 pointer-events-none "
	/>
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}

	img {
		@apply select-none pointer-events-auto;
	}

	#container1,
	#container2 {
		animation: marquee 24s infinite linear;
	}

	#banner::after,
	#banner::before {
		@apply content-[''] absolute from-white/0  via-white/80 to-white top-0 bottom-0 w-[10vw];
	}

	:global(.dark #banner::after),
	:global(.dark #banner::before) {
		@apply from-zinc-700/0 via-zinc-700/90 to-zinc-700;
	}

	#banner::after {
		@apply bg-gradient-to-r -right-1;
	}

	#banner::before {
		@apply bg-gradient-to-l -left-1;
	}
</style>
