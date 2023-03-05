const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c5258",
        secondary: "#d7d7d7",
        org: "#f75d34",

        yellow: "#FFCB32",

        gray1: "#8F9093",

        green1: "#10ac84",
        green2: "#706fd3",

        sky1: "#E3F4FF",

        slate1: "#0f141e",
      },
      boxShadow: {
        shadow1: "rgba(0, 0, 0, 0.16) 0px 1px 4px;0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        shadow2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        shadow3: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
      },
      fontSize: {
        s: "12px",
      },
      screens: {
        medium: { max: "1200px" },
        tab: { max: "768px" },
        mobile: { max: "512px" },
      },
    },
  },
  plugins: [],
})
