/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      serif: ["Merriweather", "serif"],
      title: ["Libre Bodoni", "serif"],
    },
    extend: {
      colors: {
        darkbrawn: "#434343",
        paleblue: "#236EA5",
        quote: "#e9e5de",
        orange: "#d4a024",
        lightgray: "#F1F1F1",
      },
      zIndex: {
        1: "1",
        "-1": "-1",
      },
      lineHeight: {
        exloose: "3",
      },
    },
  },
  plugins: [],
}
