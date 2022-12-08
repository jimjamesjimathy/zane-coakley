/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        charcoal: "#3B242F",
        green: "#55B2BB",
        maize: "#F7C934",
        brown: "#F5A654",
        red: "#F11661",
        "opaque-black": "rgba(0,0,0,0.3)",
      },
      backgroundImage: (theme) => ({
        "line-gradient":
          "linear-gradient(81.66deg, #E9C46A 7.21%, #F4A261 45.05%, #E76F51 78.07%)",
      }),
      fontFamily: {
        amatic: ["Amatic SC", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    screens: {
      fs: "375px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1255px",
      xl: "1700px",
    },
  },
  plugins: [],
};