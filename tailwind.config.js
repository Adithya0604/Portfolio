/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const  newUtilities ={

        '.scrollbar-hidden::-webkit-scrollbar':{
          'display': 'none',
        },
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',  /* IE & Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      };
      addUtilities(newUtilities);
    },
    
  ],
};