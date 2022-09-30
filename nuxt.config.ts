// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  ssr: false,
  target: 'static',
  publicRuntimeConfig: {
    PEXELS_KEY: process.env.PEXELS_KEY
  },
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'github-dark',
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
}
