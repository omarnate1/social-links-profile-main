/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        "off-black": "#141414",
        grey: "#333333",
        "dark-grey": "#1f1f1f",
        green: "#c5f82a",
      },
    },
  },
  plugins: [],
};
