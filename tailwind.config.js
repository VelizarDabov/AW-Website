/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.css",
  ],
  theme: {
    extend: {
  colors:{
    blue:{
      50:'#dfdff0',
75:'#dfdff2',
100:'#f0f2fa',
200:'#010101',
300:'#4fb7dd'
    },
    violet:{
      300:'#5724ff'
    },
    yellow:{
      100:'#8e983f',
      300:'#edff66'
    }
  }
    },
  },
  plugins: [],
}

