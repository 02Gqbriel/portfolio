<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */ export function load({ error, status }) {
		return {
			props: {
				status: status,
				message: error.message
			}
		};
	}
</script>

<script>
	import ErrorSvg from './../components/ErrorSvg.svelte';

	export let status;
	export let message;
</script>

<div class="flex justify-evenly">
	<div class="flex flex-col justify-between">
		<h1 class="text-5xl">Ups..</h1>
		<span class="text-opacity-60 text-xl">Error: {status} <br />{message}</span>
	</div>
	<span />
	<ErrorSvg />
</div>
