// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          'Plus+Jakarta+Sans': true
        }
    }],
    '@pinia/nuxt'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
