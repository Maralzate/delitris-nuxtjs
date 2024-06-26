import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  module: {
    darkMode: 'class'
  },
  
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        textdark: '#16180c',
        textlight: '#d4d8ca',
        textblue: '#214859',
        tris: {
          blue: '#214859',
          light: '#aab296',
          soft: '#d4d8ca',
          DEFAULT: '#455a21',
          dim: '#1c2111',
          dark: '#16180c',   
        }
      }
    }
  }
}