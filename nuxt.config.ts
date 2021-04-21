import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  /**
   * Runtime Config
   * @description Injects env variables, falls back to production values.
   * @implements isDev
   */
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://www.digital-hotel.net',
    devBaseURL: process.env.DEV_BASE_URL || 'https://dev.digital-hotel.net',
    appURL: process.env.APP_URL || 'https://app.digital-hotel.net',
    devAppURL: process.env.DEV_APP_URL || 'https://dev.app.digital-hotel.net',
  },
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'msapplication-TileColor',
        content: '#d13f3f'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png?v=2bAP0yXlkw'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png?v=2bAP0yXlkw'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png?v=2bAP0yXlkw'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest?v=2bAP0yXlkw'
      },
      {
        rel: 'mask-icon',
        color: '#d92b2b',
        href: '/favicon/safari-pinned-tab.svg?v=2bAP0yXlkw'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon/favicon.ico?v=2bAP0yXlkw'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e51b23' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/main.scss',
  ],
  // serverMiddleware: ['~/api/index.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    // '@nuxtjs/prismic',
    // '@nuxtjs/gtm',
    // [
    //   'nuxt-facebook-pixel-module',
    //   {
    //     /* module options */
    //     track: 'PageView',
    //     pixelId: 'pixelId',
    //     autoPageView: true,
    //     disabled: false
    //   }
    // ],
    // '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    // 'nuxt-imagemin',
    // [
    //   'nuxt-imagemin',
    //   {
    //     optipng: { optimizationLevel: 5 },
    //     gifsicle: { optimizationLevel: 2 }
    //   }
    // ],
    'nuxt-maintenance-mode',
    '@nuxtjs/robots',
    'nuxt-i18n',
  ],

  i18n: {
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.ts'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.ts'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'de',
      silentFallbackWarn: true,
      silentTranslationWarn: true
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  maintenance: {
    enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activate maintenance mode on startup
    path: '/maintenance', // maintenance fallback content routing
    matcher: /^\/admin/ // Path to be in maintenance mode (regex)
  },
  sitemap: {
    hostname: 'https://www.digital-hotel.net',
    gzip: true,
    exclude: ['/secret', '/admin/**']
  },
  sentry: {
    dsn: '',
    config: {}
  },
  pwa: {
    workbox: {
      importScripts: ['pushSw.js']
    }
  },
  gtm: {
    id: 'G-4CT5YQBZ0K'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/isDev.client',
    '~/plugins/swiper.client',
    '~/plugins/activeCampaign.client'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['truncate'],
    babel: { compact: true },
    extractCSS: {
      ignoreOrder: true
    }
  },

  /**
   * Images
   */
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],

  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html'
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  resolve: {
    extensions: ['.ts', '.vue', '.js']
  }
}

export default config
