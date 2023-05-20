/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  safelist: [],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      background: {
        primary: '#09090B',
        primaryHover: '#121217',
        primaryDisabled: '#6B5D07',
        primaryActive: '#16161D',
        secondary: '#16161D',
        secondaryHover: '#1F1F28',
        secondaryActive: '#24242E',
        inverse: '#FFFFFF'
      },

      stroke: {
        primary: '#1F1F28',
        secondary: '#2D2D39'
      },

      content: {
        primary: '#FFFFFF',
        primarySub: '#C3C6CA',
        secondary: '#8E929A',
        tertiary: '#737882',
        inverse: '#09090B'
      },

      primary: {
        lighter: '#9A76ED',
        DEFAULT: '#8B60ED',
        darker: '#8151ED'
      },

      error: {
        lighter: '#F76E72',
        DEFAULT: '#F53B42',
        darker: '#D9262D'
      },

      success: {
        lighter: '#6BC77F',
        DEFAULT: '#46B95F',
        darker: '#38944C'
      }
    },
  },
};
