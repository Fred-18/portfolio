/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        h1:"50px",
        h2:"25"
        
      },
      colors:{
          'custom-black':"#212529",
          'custom-white':'#d9d9d9',
          'custom-gadient':    "background: linear-gradient(to right, #212529 0%, #d9d9d9 96%);"

          
      },

      fontFamily:{
      'pt':['PT Sans']  
   },
   

     
    },
  },
  
  plugins: [],
};
