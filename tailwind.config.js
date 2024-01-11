/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        purple: '#986DFF'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        saira: ['Saira', 'sans-serif']
      }
    },
  },
  plugins: [],
}

