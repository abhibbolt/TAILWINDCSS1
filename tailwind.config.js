/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair:"'playfair display',serif",
        lato:"'lato',sans-serif",
      }
    },
  },
  plugins: [],
}