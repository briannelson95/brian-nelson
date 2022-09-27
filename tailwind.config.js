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
      "black": "#0f0f0f"
    }
  },
  plugins: [],
}