/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'about': "url('./Image/Photo.jpg')"
      },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"]
      },
      colors: {
        bodyColor: "#09090b",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg,#1e2024,#23272b)",
        designColor: "#fed7aa",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px -10px 19px #262a2e",
      },
      screens:{
        'mb': '375px',  
        'sm': '425px',  
        'md': '640px',    
        'lg': '1024px',    
        'xl': '1280px',   
        '2xl': '1536px'
      }
    },
    plugins: [],
  }

}
