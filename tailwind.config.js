/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode : "class",
  theme: {
    container: {
      center : true
    },
    fontFamily:{
      dana:"Dana",
      danaBold:"Dana Bold"
    }
    ,
    extend: {
      colors:{
        "main-color":"#e2000f"
      }
    },
  },
  plugins: [],
}

