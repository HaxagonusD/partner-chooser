module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#332459",
				secondary: "#fec20a",
			},
			fontFamily: {
				headings: ["Montserrat"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
