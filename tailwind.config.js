/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        spaceGrotesk: ['Space Grotesk', 'serif']
      }
    },
  },
  plugins: [],
}

