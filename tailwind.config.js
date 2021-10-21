module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '3': 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '100px minmax(200px, 1fr) 100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
