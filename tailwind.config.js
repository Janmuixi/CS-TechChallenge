/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          light: '#F6F7F9',
          dark: '#c3d4e9',
          standard: '#90A3BF'
        },
        blue: {
          dark: '#3563E9',
          light: '#54A6FF'
        }
      }
    },
    backgroundImage: {
      'card-light': "url('/assets/images/card-bg-light.svg')",
      'card-dark': "url('/assets/images/card-bg-dark.svg')"
    }
  },
  plugins: [],
}

