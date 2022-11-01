/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./**/*.html"],
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
