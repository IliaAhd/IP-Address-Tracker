/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubic: "Rubik, sans-serif",
      },
      backgroundImage: {
        "header": "url('../images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
