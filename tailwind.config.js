/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite-react/**/*.js",
  ],
  
  theme: {
    extend: {
      colors: {
        customBrown: "#826355", 
        customGreen: "#3C3D29",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [   require('flowbite/plugin')],
}

