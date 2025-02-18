/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#1F2B39',
				blue: '#1F2B39',
				'light-blue': '#0097E9',
				'dark-blue-balance': '#253445',
				gray: '#94A2B8',
				'dark-gray': '#242D38',
			},
		},
	},
	plugins: [],
}
