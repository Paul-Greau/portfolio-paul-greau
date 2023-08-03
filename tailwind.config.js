/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#EFEFEF",
        tertiary: "#F5F5F5",
      },
      backgroundImage: {
        "header-pattern": "url('/src/assets/images/bg_portfolio.png')",
      },
    },
  },

  plugins: [],
};
