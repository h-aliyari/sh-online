// frontend\tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f53b57",
        secondary: "#1e272e",
        lightBackground: "#fcfcfc",
        darkBackground: "#121212",
      },
    },
  },
  plugins: [],
};