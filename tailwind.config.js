/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'santy': '#3498db',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'display' : ['Gilroy','sans-serif']
      }
    },
  },
  plugins: [],
}

