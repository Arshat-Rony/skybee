module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Jost', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09080D",
          secondary: "#16151A",
          accent: "#4528DC",
          neutral: "#57048A",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}