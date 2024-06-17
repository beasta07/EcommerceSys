/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '904px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      container: {
        center: true,
        padding: '0.1rem',
      },
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
