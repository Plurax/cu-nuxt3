import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  nitro: {
    preset: 'service-worker'
  },
  publicRuntimeConfig: {
    PEXELS_KEY: process.env.PEXELS_KEY
  },
  content: {
    highlight: {
      theme: 'material-palenight',
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': true,
          'tailwindcss/nesting': {},
          'postcss-nested': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "assets/css/tailwind.css"
  ],
  modules: ['@nuxt/content']
})
