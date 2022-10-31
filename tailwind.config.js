/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				airbnb: ["Airbnb", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
