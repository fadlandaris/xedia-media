// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBlue: "#236CF6",
        lightBlue: "#A7C5FB",
        darkenBlue: "#072f6A",
        greenBlue: "#01D0D2",
        text: "#A8B4C7",
        lightBlack: "#25262A"
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
