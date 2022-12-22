/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './icons/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          01: '#743393',
          02: '#9255A2',
          03: '#B77BC7',
          04: '#500673',
        },
        black: {
          10: '#F9FAFC',
          20: '#F3F4F6',
          30: '#E6E7EB',
          40: '#D1D4DB',
          50: '#9CA2AE',
          60: '#6B7380',
          80: '#384152',
          100: '#111828',
        },
      },
      fontFamily: {
        sansPro: ["'Source Sans Pro', sans-serif"],
      },
      backgroundImage: {
        whiteBlur:
          'linear-gradient(270deg, #FFFFFF 81.63%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
