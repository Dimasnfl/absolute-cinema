/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        fontFamily: {
            sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};
