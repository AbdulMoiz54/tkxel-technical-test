/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(140, 48, 245, 1)",
        secondary: "#1da1f2",
        lightGray: "#E5E9F2",
        lightPurple: "#F1E4FF",
        darkPurple: "#8C30F5",
        seagreen: "#2EC5CE",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "body-1": ["16px", "26px"],
        "lead-1": ["18px", "32px"],
        "lead-2": ["14px", "24px"],
        h2: ["48px", "64px"],
        h3: ["40px", "54px"],
        h4: ["28px", "40px"],
        h5: ["24px", "32px"],
        "subtitle-2": ["18px", "28px"],
        "large-label": ["20px", "30px"],
      },
      fontWeight: {
        "body-1": 400,
        "lead-1": 400,
        "lead-2": 500,
        h2: 800,
        h3: 800,
        h4: 800,
        h5: 600,
        "subtitle-2": 500,
        "large-label": 700,
      },
    },
  },
  plugins: [],
};
