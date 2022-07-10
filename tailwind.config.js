const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5E4BC',
        primary: '#CA6B63',
        secondary: '#4D4A36'
      },
      boxShadow: {
        box: '10px 10px 0px 0px rgba(0, 0, 0, 1)'
      },
      fontFamily: {
        primary: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
};
