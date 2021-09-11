module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        open: ['Roboto Mono', 'monospace','openhuninn', 'Noto Sans TC', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
