module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBlue: '#236CF6',
        primaryPurple: '#671f75',
        lightBlue: "#A7C5FB",
        darkenBlue: '#072f6A',
        text: "#A8B4C7",
        lightBlack: "#25262A",
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      boxShadow: {
        threeDimension: '0 0px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)', 
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
      });
    },
  ],
};
