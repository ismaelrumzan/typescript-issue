import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
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
    title: 'Digital Hotel - digital überall',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Digital überall.'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon/favicon-32x32.png'
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
    '@nuxt/content',
    // '@nuxtjs/prismic',
    '@nuxtjs/gtm',
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: 'pixelId',
        autoPageView: true,
        disabled: false
      }
    ],
    [
      'nuxt-social-meta',
      {
        title: 'Digital Hotel - digital überall',
        description: 'Digital Hotel',
        url: 'https://www.digital-hotel.net',
        img: '/link_to_image_in_static_folder.jpg',
        locale: 'de-DE',
        twitter: '@twitterHandle',
        themeColor: '#3367D6'
      }
    ],
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    'nuxt-imagemin',
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 }
      }
    ],
    'nuxt-maintenance-mode',
    '@nuxtjs/robots',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
    'vue-social-sharing/nuxt',
    '@nuxtjs/style-resources'
  ],
  i18n: {},
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
    manifest: {
      name: 'Digital Hotel',
      lang: 'de',
      theme_color: '#3367D6'
    },
    workbox: {
      importScripts: ['pushSw.js']
    }
  },
  gtm: {
    id: 'G-4CT5YQBZ0K'
  },

  // This is where you configure your settings for the new plugin
  // prismic: {
  //   endpoint: 'https://xyz.cdn.prismic.io/api/v2',
  //   linkResolver: '@/plugins/link-resolver',
  //   htmlSerializer: '@/plugins/html-serializer'
  // },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/isDev.client',
    '~/plugins/isTouch.client',
    '~/plugins/Userback.client',
    '~/plugins/vue-fragment',
    '~/plugins/swiper.client',
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['truncate'],
    babel: { compact: true }
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
