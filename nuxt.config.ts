import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  /**
   * Enable global components
   */
  components: [
    {
      path: '~/components/global',
      extensions: ['vue']
    }
  ],
  /**
   * Runtime Config
   * @description Injects env variables, falls back to production values.
   */
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    appURL: process.env.APP_URL,
    branch: process.env.VERCEL_GIT_COMMIT_REF,
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
        content: '#35a9d5'
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
        href: '/favicon/apple-touch-icon.png?v=OTV2'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png?v=OTV2'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png?v=OTV2'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest?v=OTV2'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/favicon/safari-pinned-tab.svg?v=OTV2'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon/favicon.ico?v=OTV2'
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
  loading: { 
    color: '#209ddb' 
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/main.scss',
  ],

  // serverMiddleware: [
  //   {
  //     path: '/newsletter',
  //     handler: '~/server-middleware/newsletter.ts'
  //   }
  // ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-content-git', {
      createdAtName: 'gitCreatedAt',
      updatedAtName: 'gitUpdatedAt',
    }],
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
    'nuxt-maintenance-mode',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  axios: {
    baseURL: 'http://localhost:3000' // fallback
  },

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
    Disallow: '/api',
    Sitemap: 'https://oktus.io/sitemap.xml'
  },

  maintenance: {
    enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activate maintenance mode on startup
    path: '/maintenance', // maintenance fallback content routing
    matcher: /^\/admin/ // Path to be in maintenance mode (regex)
  },

  sitemap: {
    hostname: 'https://oktus.io',
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
    provider: 'static',
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
    '@nuxt/image',
    '@nuxt/typescript-build',
    // '@nuxtjs/pwa',
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
