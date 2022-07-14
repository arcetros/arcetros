module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5E4BC',
        primary: '#CA6B63',
        secondary: '#4D4A36'
      },
      gridTemplateRows: { 9: 'repeat(9, minmax(0, 1fr))' },
      boxShadow: {
        box: '10px 10px 0px 0px rgba(0, 0, 0, 1)'
      },
      fontFamily: {
        primary: ['Grotesk Regular', 'Grotesk Medium', 'Grotesk Bold'],
        secondary: ['Lausanne']
      }
    }
  },
  plugins: []
};
