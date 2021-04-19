module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2DS',
          200: '#888883',
        }
      },
      spacing: {
        'fixedSize': '60rem'
      },
      fontFamily: {
        newfont: ['Nunito'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
