/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#88c125",
        "primary-hover": "#7a3c93",
        text: "#141510",
        light: "#ffffff",
        border: "#999999",
      },
      fontFamily: {
        base: ["Nunito", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        h1: "22px",
        h2: "20px",
        h3: "18px",
        h4: "16px",
        h5: "14px",
        h6: "12px",
        code: "1.2em",
      },
      spacing: {
        base: "20px",
        small: "4px",
        medium: "10px",
        large: "32px",
      },
      borderRadius: {
        custom: "15px",
      },
      maxWidth: {
        desktop: "33vw",
        tablet: "80vw",
        mobile: "90vw",
      },
      height: {
        "90vh": "90vh",
      }
    },
  },
  plugins: [],
};