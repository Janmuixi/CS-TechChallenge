// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          'Plus+Jakarta+Sans': true
        }
    }],
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@images': './assets/images'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  nitro: {
    devProxy: {
        '/api': {
            target: 'https://dm-assignment-commonshare.koyeb.app/api',
            changeOrigin: true
        }
    }
  }
})
