const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.blue['800'],
        charcoal: '#40454f',
        'eerie-black': '#1a1a1a',
        platinum: '#eaeaea',
        'metallic-seaweed': '#08838b',
      },
    },
  },
  variants: {},
  plugins: [],
};
