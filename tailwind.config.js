/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        blink: {
          'pink': '#E50085',
          'cyan': '#2DC5AE'
        }

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

