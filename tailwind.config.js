/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				jost: ['Jost', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1.5rem',
			},

			boxShadow: {
				inset: 'inset 0px 0px 10px rgba(0,0,0,0.05)',
			},
		},
	},
	plugins: [],
};
