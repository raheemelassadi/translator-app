const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      lightBlue: "#121826B3",
      lightGray: "#4D5562",
      brightWhite: "#F9FAFB",
      darkblue: "#3662E3",
      babyBlue: "#7CA9F3",
    },
    extend: {},
  },
  plugins: [],
};
