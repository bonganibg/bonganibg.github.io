const themes = require('daisyui/src/colors/themes');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        100: "#FFFFFF",
        200: "#f8f9fa",
        300: "#e9ecef",
        400: "#ced4da"
      },
      grey: {
        100: "#6c757d",
        200: "#495057",
        300: "#343a40",
        400: "#212529"
      }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light']
  }
}
