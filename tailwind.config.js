/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode for Tailwind CSS v2.x
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "themebrown":"#b35c21"
      },
      fontFamily:{
        "mainFont1":["Playfair Display","serif"],
        "mainFont2":["Josefin Sans","sans serif"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
            sm: "2rem",
            md: "4rem",
            xl: "5rem",
            "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}
