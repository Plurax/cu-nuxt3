import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  publicRuntimeConfig: {
    PEXELS_KEY: process.env.PEXELS_KEY
  },
  content: {
    highlight: {
      theme: 'material-palenight',
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || 'http://localhost:3000',
    }
  }
})
