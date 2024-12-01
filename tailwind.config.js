/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", //class for darkmode setup
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: '#00ff99',
          hover: "#00e187",
        },
      },
    },
  },
  plugins: [],
};
