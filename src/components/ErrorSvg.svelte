<script>
	import { theme, theme_mode as tm } from './../stores';

	$: t = $theme[$tm];
</script>

<span class={`bg-[${t.fontColor}] select-none`}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke={t.backgroundColor}
		class={`w-36 h-36 rounded-xl select-none`}
		style="background: var(--color);"
		stroke-width="2"
	>
		<path
			class="select-none"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
</span>
