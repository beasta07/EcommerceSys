/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '4rem',
          sm: '2rem',
          lg: '4rem',
          xl: '4rem',
          '2xl': '4rem',
        },
      },
    },
  },
  plugins: [],
}
