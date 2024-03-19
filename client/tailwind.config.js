// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   // sm: '640px',
      //   // // => @media (min-width: 640px) { ... }
  
  
     
      //   'sm': {'max-width': '649px'},  // up to 639px
      //   'md': {'max-width': '767px'},  // up to 767px
      //   'lg': {'max-width': '1023px'}, // up to 1023px
      //   'xl': {'max-width': '1279px'}, // up to 1279px
      //   '2xl': {'max-width': '1535px'},// up to 1535px
      // },
    },
  },
  plugins: [],
}