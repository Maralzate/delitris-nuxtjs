/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        textdark: '#16180c',
        textlight: '#d4d8ca',
        textblue: '#214859',
        logodark: '#3a5522',
        logolight: '#729951',
        tris: {
          blue: '#214859',
          light: '#aab296',
          soft: '#d4d8ca',
          DEFAULT: '#455a21',
          dim: '#1c2111',
          dark: '#16180c',         
        }
      },
    },
    
  },
  plugins: [],
}

