/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          navy: '#0A1118',
          blue: '#0066cc',
          green: '#3e5c54',
        }
      },
      spacing: {
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      }
    },
  },
  plugins: [],
}
