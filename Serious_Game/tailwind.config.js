/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00fff9',
        'neon-magenta': '#ff00ff',
        'dark-bg': '#0a0e27',
      }
    },
  },
  plugins: [],
}