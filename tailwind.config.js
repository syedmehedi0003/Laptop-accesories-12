module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FDB8E",
          secondary: "#222BF7",
          accent: "#3A4256",
          neutral: "#08ECF7",
          "base-100": "#ffffff",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
