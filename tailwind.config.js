module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        spreadBottom : {
          '0%': { width: '1rem' },
          '70%': { width: '100%', left:  0},
          '100%': { width: '90%', left: '5%' }
        }
      }, 
      animation: {
        spreadBottom: 'spreadBottom 300ms linear 0s forwards'
      }, 
    },
  },
  plugins: [],
}
