/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            product: {
                blue: {
                    dark: "#1E6F9F",
                    DEFAULT: "#4EA8DE",
                },
                purple: {
                    dark: "#5E60CE",
                    DEFAULT: "#8284FA",
                },
            },
            base: {
                gray: {
                    100: "#F2F2F2",
                    200: "#D9D9D9",
                    300: "#808080",
                    400: "#333333",
                    500: "#262626",
                    600: "#1A1A1A",
                    700: "#0D0D0D",
                },
            },
            feedback: {
                danger: "#E25858",
            },
        },
        fontWeight: {
            bold: "700",
            normal: "400",
        },
        fontSize: {
            sm: "0.75rem",
            base: "0.875rem",
            lg: "1rem",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
