module.exports = {
	purge: {
		enabled: false,
		content: ['./src/**/*.html', './src/**/*.nunj', './src/**/*.js']
	},
	darkMode: false, // Or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
