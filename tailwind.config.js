/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure your src folder is included
];
export const theme = {
    extend: {
        keyframes: {
            marquee: {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(-100%)" },
            },
        },
        animation: {
            marquee: "marquee 12s linear infinite",
        },
    },
};
export const plugins = [];
