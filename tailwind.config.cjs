const { theme } = require('tailwindcss/defaultConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte,svg}'],
	theme: {
		fontFamily: {
			sans: ['"Poppins"', ...theme.fontFamily.sans],
			title: ["'La Belle Aurore'", 'cursive'],
		},

		extend: {},
	},
	plugins: [],
	darkMode: 'class',
};
