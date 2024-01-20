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
      MAIN_TEXT_COLOR:'#13231B'
    },
    backgroundImage: theme => ({
      'gradient-custom': `linear-gradient(to right, rgba(40, 175, 110, 0.168), rgba(40, 175, 110, 0))`,
    }),
    extend: {
      gradientColorStopPositions: {
        33: '16.8%',
      }
    },
  },
  plugins: [],
};
