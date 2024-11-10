/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
					colors: {
					  computerRed: '#ff0000', // Replace with your color
					},
				  },
	},
	plugins: [],
}
