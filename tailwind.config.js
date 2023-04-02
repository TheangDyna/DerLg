/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   display: ["Montserrat", "sans-serif"],
    //   bodyEn: ["Oswald", "sans-serif"],
    //   bodyKh: ["Kantumruy", "sans-serif"],
    // },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#29629A",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#29629A",
          "base-100": "#0A2647",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
