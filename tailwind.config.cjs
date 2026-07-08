/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
	darkMode: "class", // allows toggling dark mode manually
	theme: {
		extend: {
			fontFamily: {
				sans: ["EB Garamond", "Zhuque Fangsong (technical preview)", ...defaultTheme.fontFamily.sans],
				mono: ["Courier Prime", "Zhuque Fangsong (technical preview)", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
