/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#EEF5FF",
        primary: "#103783",
        secondary: "#247EFF",
        dimWhite: "rgba(255, 255, 255, 0.78)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        100: "100",
        10: "10",
        9999: "9999",
      },
    },
    screens: {
      xxs: "330px",
      xs: "480px",
      ss: "550px",
      sm: "768px",
      md: "1100px",
      lg: "1410px",
      xl: "1700px",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      // DEFAULT: "0.25rem",
      // DEFAULT: "4px",
      md: "0.75rem",
      lg: "1.5rem",
      xxl: "2.5rem",
      full: "9999px",
      large: "12px",
    },
    boxShadow: {
      sit: "0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
      lit: "0px 3px 8px -1px rgba(0, 0, 0, 0.16)",
      pit: "0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.05), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.03), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
    },
    dropShadow: {
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
    },
  },
  plugins: [],
};
