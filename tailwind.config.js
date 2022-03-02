module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ip': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
      },
      fontSize: {
        'xss': '.6rem',
      },
      width: {
        '24r': '24rem',
        '30r': '30rem',
        '32r': '32rem'
      },
      height: {
        '21r': '21rem',
        '24r': '24rem',
        '32r': '32rem',
      },
      maxWidth: {
        'xxs': '16rem',
        '10r': '20rem',
      },
      minHeight: {
      },
      boxShadow: {
      },
      scale: {
        '60': '0.6',
        '101': '1.006',
        '102': '1.02',
        '180': '1.8',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
