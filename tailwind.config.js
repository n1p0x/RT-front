/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'another-blue': '#18222D',
				'dark-blue': '#1F2B39',
				'dark-blue-balance': '#253445',
				'light-blue': '#0097E9',
				gray: '#94A2B8',
				'dark-gray': '#242D38',
			},
		},
	},
}
