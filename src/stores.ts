import { writable, readable } from 'svelte/store';
import { browser } from '$app/env';

interface Style {
	primaryColor: string;
	secondaryColor: string;
	backgroundColor: string;
	darkbackgroundColor: string;
	fontColor: string;
}

const theme_color = browser ? localStorage.getItem('theme_color') ?? 'light' : 'light';

export const theme_mode = writable(theme_color);

theme_mode.subscribe((e) => {
	browser && localStorage.setItem('theme_color', e);
});

export const theme = readable({
	dark: {
		primaryColor: '#69995D',
		secondaryColor: '#75A96A',
		backgroundColor: '#424242',
		darkbackgroundColor: '#383838',
		fontColor: '#FEFFEA'
	},
	light: {
		primaryColor: '#69995D',
		secondaryColor: '#75A96A',
		backgroundColor: '#FEFFEA',
		darkbackgroundColor: '#EEEFDA',
		fontColor: '#424242'
	}
});

export const style = (t: Style) => {
	return `--color:${t.fontColor};--background:${t.backgroundColor};--primary:${t.primaryColor};--secondary:${t.secondaryColor};--darkbackground:${t.darkbackgroundColor}`;
};
