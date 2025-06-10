/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", extract],
  theme: {
    screens,
    fontSize,
    fontFamily: {
      Poppins: ["Poppins"],
      Lexend: ["Lexend"],
    },
    extend: {
      backgroundImage: {
        "home-black-radial":
          "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        "home-white-gradient":
          "radial-gradient(circle at 0% 0.5%, rgb(241, 241, 242) 0.1%, rgb(224, 226, 228) 100.2%)",
      },
      animation: {
        floatTwo: "floatTwo 2s ease-in-out 0.5s infinite ",
        floatOne: "floatOne 2s ease-in-out 0.5s infinite",
      },
      keyframes: {
        floatTwo: {
          "0%, 100%": { transform: "translateY(0px) rotate3d(1, 1, 0, 45deg)" },
          "50%": { transform: "translateY(20px) rotate3d(1, 1, 0, 45deg)" },
        },
      },
    },
  },
  plugins: [
    fluid,
    function ({ addUtilities }) {
      addUtilities({
        ".float-One-custom": {
          transform: "rotate3d(-0.65, -0.2, 0.6, 25deg)",
        },
        ".float-Two-custom": {
          transform: "rotate3d(1, 1, 0, 45deg)",
        },
      });
    },
  ],
};
