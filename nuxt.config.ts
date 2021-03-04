import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Digital Hotel - digital überall',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Digital überall.',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon/favicon-32x32.png',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
      { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0c64c1' },

  /*
   ** Global CSS
   */
  css: [
    // '~assets/fontawesome/css/all.css',
    // '~assets/fontawesome/css/all.css',
    // '~assets/styles/calendar-widget.scss',
    // '~assets/styles/styles.scss',
  ],
  // serverMiddleware: ['~/api/index.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/gtm',
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: 'pixelId',
        autoPageView: true,
        disabled: false,
      },
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
        themeColor: '#3367D6',
      },
    ],
    'bootstrap-vue/nuxt',
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    'nuxt-imagemin',
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 },
      },
    ],
    'nuxt-purgecss',
    'nuxt-maintenance-mode',
    '@nuxtjs/robots',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
    'vue-social-sharing/nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  i18n: {},
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  maintenance: {
    enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activate maintenance mode on startup
    path: '/maintenance', // maintenance fallback content routing
    matcher: /^\/admin/, // Path to be in maintenance mode (regex)
  },
  sitemap: {
    hostname: 'https://www.digital-hotel.net',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
  },
  sentry: {
    dsn: '',
    config: {},
  },
  pwa: {
    manifest: {
      name: 'Digital Hotel',
      lang: 'de',
      theme_color: '#3367D6',
    },
    workbox: {
      importScripts: ['pushSw.js'],
    },
  },
  gtm: {
    id: 'G-4CT5YQBZ0K',
  },

  // This is where you configure your settings for the new plugin
  prismic: {
    endpoint: 'https://xyz.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/Userback.client'],
  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'zoom-in',
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['truncate'],
    babel: { compact: true },
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/pwa'],

  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html',
  },

  env: {},

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
  },
};

export default config;
