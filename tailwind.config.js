module.exports = {
	purge: {
		enabled: false,
		content: ['./src/**/*.html', './src/**/*.nunj', './src/**/*.js']
	},
	darkMode: false, // Or 'media' or 'class'
	theme: {
		fontFamily: {
			  sans: ['intervar', 'system-ui', 'sans-serif']
			}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
