/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
					colors: {
					  pinkiePiePink: '#D5006D', // Replace with your color
					},
					fontFamily:{
						timesNewRoman:['"Times New Roman', 'serif'],
					},
				  },

	},
	plugins: [],
}
