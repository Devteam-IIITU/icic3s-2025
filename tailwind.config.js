/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', '"Arial Narrow"', 'Arial', 'sans-serif'],
      },
      screens: {
        'lg-custom': '1270px', // Custom screen size for 1270 pixels
      },
    },
  },
  plugins: [],
}