import { mtConfig } from "@material-tailwind/react";



/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"

  ],

  theme: {

    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },

  plugins: [mtConfig],

}
