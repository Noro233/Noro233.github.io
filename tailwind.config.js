/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:["Poppins","sans-serif"] ,
        titleFont:["Montserrat", "sans-serif"]
      },
      colors:{
        bodyColor: "#09090b",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg,#1e2024,#23272b)",
        designColor: "#fed7aa",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px -10px 19px #262a2e",
      }
    },
  },
  plugins: [],
}

