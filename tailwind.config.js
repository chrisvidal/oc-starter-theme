const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './assets/src/**/*.vue',
    './layouts/**/*.htm',
    './pages/**/*.htm',
    './partials/**/*.htm',
      './../../plugins/voilaah/**/*.htm',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': colors.red,
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      padding: {
        '16x9': '56.25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
