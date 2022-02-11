const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: 'rgb(var(--mainBg))',
        mainText: 'var(--mainText)',
        placeholder: 'var(--pladeholder)',
      },
      boxShadow: {
        allShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.03)',
        ...defaultTheme.boxShadow,
      },
    },
  },
  plugins: [],
}
