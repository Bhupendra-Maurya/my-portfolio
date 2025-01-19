/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo color, you can change this
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
