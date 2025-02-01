

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
        scrollLeft: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%)'},
        },
        scrollRight: {
          '0%' : {transform : 'translateX(-50%)'},
          '100%': {transform: 'translateX(0%)'},
        },
      },
      animation: {
        'border-focus': 'borderFocus 0.5s ease-in-out forwards',
        'scroll-left': 'scrollLeft 100s linear infinite',
        'scroll-right': 'scrollRight 150s linear infinite',
      },
      colors: {
        "themebrown": "#b35c21",
        "admintheme": "#00a1ff"
      },
      fontFamily: {
        "mainFont1": ["Playfair Display", "serif"],
        "mainFont2": ["Josefin Sans", "sans-serif"],
        "adminFont": ["Inter", "serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
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
