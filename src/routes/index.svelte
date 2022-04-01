<script>
	import { theme, theme_mode, style } from '../stores';

	$: t = $theme[$theme_mode];
</script>

<svelte:head>
	<title>Gabriels Portfolio</title>
</svelte:head>

<span style={style(t)}>
	<h1>Hello</h1>
</span>

<style>
</style>
