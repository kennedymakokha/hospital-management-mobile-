/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#82c7fe',
          200: "#8fcdfe", 300: "#9bd2fe", 400: "#a8d8fe", 500: "#b4ddfe", 600: "#c1e3ff", 700: "#cde9ff", 800: "#daeeff", 900: "#e6f4ff", 1000: "#f3f9ff"
        },
        secondary: {
          100: '#1075f7',
          200: '#0f91f6'
        }
      }
    },
  },
  plugins: [],
}

