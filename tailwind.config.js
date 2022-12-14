/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    "colors": {
      "slate": {
        "50": "#77797c",
        "100": "#6d6f72",
        "200": "#636568",
        "300": "#595b5e",
        "400": "#4f5154",
        "500": "#45474a",
        "600": "#3b3d40",
        "700": "#313336",
        "800": "#27292c",
        "900": "#1d1f22"
      },
      "white": "#ffffff",
      "black": "#0f0f0f",
      "indigo": {
        "50": "#EEF2FF",
        "100": "#E0E7FF",
        "200": "#C7D2FE",
        "300": "#A5B4FC",
        "400": "#818CF8",
        "500": "#6366F1",
        "600": "#4F46E5",
        "700": "#4338CA",
        "800": "#3730A3",
        "900": "#312E81",
      },
      "purple": {
        "50": "#FAF5FF",
        "100": "#F3E8FF",
        "200": "#E9D5FF",
        "300": "#D8B4FE",
        "400": "#C084FC",
        "500": "#A855F7",
        "600": "#9333EA",
        "700": "#7E22CE",
        "800": "#6B21A8",
        "900": "#581C87",
      },
      "pink": {
        "50": "#FDF2F8",
        "100": "#FCE7F3",
        "200": "#FBCFE8",
        "300": "#F9A8D4",
        "400": "#F472B6",
        "500": "#EC4899",
        "600": "#DB2777",
        "700": "#BE185D",
        "800": "#9D174D",
        "900": "#831843",
      },
      "teal": {
        "50": "#F0FDFA",
        "100": "#CCFBF1",
        "200": "#99F6E4",
        "300": "#5EEAD4",
        "400": "#2DD4BF",
        "500": "#14B8A6",
        "600": "#0D9488",
        "700": "#0F766E",
        "800": "#115E59",
        "900": "#134E4A",
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}