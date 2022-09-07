const { theme } = require('tailwindcss/defaultConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte,svg}'],
	theme: {
		fontFamily: { sans: ['"Poppins"', ...theme.fontFamily.sans] },

		extend: {},
	},
	plugins: [],
	darkMode: 'class',
};
