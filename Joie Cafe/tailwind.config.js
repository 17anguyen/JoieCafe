/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {

      colors: {
        primary: "#F5CEE5",
        secondary: "#F1F1F1",
        tertiary: "#886B58"

      },
      boxShadow: {
        card: "0px 35px 120px -15px #5E4B3A",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}