/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iconGray: "#c9c9c9",
        accentOlive: "#a3b68a",
      },
      fontFamily: {
        Play: "Indie Flower",
        Gara: "EB Garamond",
        Basker: "Baskervville SC",
        Bodoni: "BodoniModal SC",
      },
    },
  },
  plugins: [],
};
