// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare)
        process.exit()
    }
  },
  target: "static",
  "css": [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'github-dark',
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'lisp']
    },
    documentDriven: true,
  },
  nitro: {
    serveStatic: true,
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    'nuxt-content-assets',
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
