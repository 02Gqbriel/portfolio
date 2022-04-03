<script>
	import { theme, theme_mode as tm } from './../stores';

	$: t = $theme[$tm];
</script>

<span class={`bg-[${t.fontColor}] select-none`}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={`w-10 h-10 rounded select-none`}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
	</svg>
</span>

<style>
	span:hover svg {
		background: var(--primary);
	}

	span:active svg {
		background: var(--color);
		stroke: var(--background);
	}
</style>
