module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['"Inter"'],
			serif: ['"Alegreya SC"'],
			mono: ['"Alegreya Sans SC"']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
