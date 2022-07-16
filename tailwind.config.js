const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5E4BC',
        primary: '#302f2f',
        secondary: '#4D4A36'
      },
      gridTemplateRows: { 9: 'repeat(9, minmax(0, 1fr))' },
      boxShadow: {
        box: '10px 10px 0px 0px rgba(0, 0, 0, 1)'
      },
      fontFamily: {
        headline: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        primary: ['Grotesk Regular', 'Grotesk Medium', 'Grotesk Bold'],
        secondary: ['Lausanne']
      }
    }
  },
  plugins: []
};
