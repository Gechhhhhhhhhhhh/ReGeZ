/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla", "serif"],
        second: ["Poppins", "serif"],
        text: ["Noto Sans", "serif"],
      },
      colors: {
        bg: "#A8E4FF",
        primary: "#5CBDEA",
        second: "#198FC7",
        text: "#3C4245",
      },
      backgroundImage: {
        img: "url('../assets/About-img2.png')",
      },
    },
  },
  plugins: [],
};
