/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["'Poppins'"],
    },
    extend: {
      fontFamily: {
        tuesday: 'Tuesday'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}