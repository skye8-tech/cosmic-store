/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#FAFAFA",
        secondary: "#F5F5F5",
        secondary2: "#DB4444",
        button1: "#00FF66",
      },
    },
  },
  plugins: [],
};
