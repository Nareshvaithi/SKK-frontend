/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode for Tailwind CSS v2.x
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderFocus: {
          '0%': { 'clip-path': 'inset(0 100% 100% 0)' },
          '25%': { 'clip-path': 'inset(0 0 100% 0)' },
          '50%': { 'clip-path': 'inset(0 0 0 100%)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)' },
        },
      },
      animation: {
        'border-focus': 'borderFocus 0.5s ease-in-out forwards',
      },
      colors:{
        "themebrown":"#b35c21",
        "admintheme":"#00a1ff"
      },
      fontFamily:{
        "mainFont1":["Playfair Display","serif"],
        "mainFont2":["Josefin Sans","sans serif"],
        "adminFont":["Inter","serif"]

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
