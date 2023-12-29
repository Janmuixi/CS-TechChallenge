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
    colors: {
      black: '#000000',
      white: '#fff',
      grey: {
        light: '#F6F7F9',
        dark: '#c3d4e9'
      },
      blue: {
        dark: '#3563E9'
      }
    }
  },
  plugins: [],
}

