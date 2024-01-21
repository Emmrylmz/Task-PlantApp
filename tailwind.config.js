/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      WHITE:'#ffffff',
      BLACK:'#000000',
      RED:'#ff0000',
      GREEN:'#28AF6E',
      ORANGE:'#e79115',
      GREY:'#c4c4c4',
      LIGHT_GREY:'#597165',
      MAIN_TEXT_COLOR:'#13231B',
      PAYMENT_BACKGROUND:'#101E17',
      PREMIUM_MESSAGE:"#E5C990",
      PREMIUM_BACKGROUND:"#24201A",
      CATEGORIES_BACKGROUND:'##F4F6F6'
    },
    fontFamily:{
      Rubik:"Rubik",
      Roboto:"Roboto"
    },
    backgroundImage: ({
      'gradient-custom': `linear-gradient(to right, PREMIUM_BACKGROUND, PREMIUM_MESSAGE)`,
    }),
    extend: {
      gradientColorStopPositions: {
        33: '16.8%',
      }
    },
  },
  plugins: [],
};
