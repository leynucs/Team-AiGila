/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0F3D91', // dark blue
        secondary: '#08B2E3', // teal/cyan
        accent: '#F9CF25', // yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
