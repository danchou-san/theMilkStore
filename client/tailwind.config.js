/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'search-bg': '#F9F7F8',
        'input-outline': '#CE8BA2'
      },
      spacing: {
        'card': '330px',
        'filter': '360px'
      }
    },
  },
  plugins: [],
}