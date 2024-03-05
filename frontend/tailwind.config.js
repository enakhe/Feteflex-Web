/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
		"./views/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'header': '#2B2349',
			},
		},
		fontFamily: {
			display: ["Poppins", "sans-serif"],
			body: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
})