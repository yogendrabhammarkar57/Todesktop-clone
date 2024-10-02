/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'santy': '#3498db',
        'magic': 'hsl(2, 100%, 89%)'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'display' : ['Gilroy','sans-serif']
      }
    },
  },
  plugins: [],
}

