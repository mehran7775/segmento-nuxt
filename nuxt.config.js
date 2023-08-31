export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  typescript: {
    strict: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'segmento-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/Fonts/YekanWebFonts/css/fontiran.css",
    "@/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "postcss-preset-env": {},
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
          ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      DEV_ENV: Boolean(process.env.DEV_ENV === 'true'),
      APP_LOCALE: process.env.APP_LOCALE,
      APP_FALLBACK_LOCALE: process.env.APP_FALLBACK_LOCALE,
      API_URL: process.env.API_URL
    }
  }
})