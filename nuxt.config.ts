// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  ssr: true,
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
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'github-dark',
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'lisp']
    }  },
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
