/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wikipedia': "url('./public/wikipedia.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}