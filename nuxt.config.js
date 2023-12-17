import i18n from './config/i18n'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leading Employeer-driven Healthcare | Prixa Ai',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
      // ,
      // { noscript: [{ imgHeight: '1', width: '1', style: 'display:none', src: 'https://www.facebook.com/tr?id=257344499949249&ev=PageView&noscript=1' }] }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap' }
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-HX8SWZP1LK' },
      { src: '/js/google.js' },
      { src: '/js/pixel.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome', {
        icons: {
          solid: ['faAngleDown']
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/i18n',
    '@nuxtjs/moment'
  ],

  i18n: {
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: false,
      // cookieKey: 'language_switcher'
    },
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: 'id',
        name: 'Indonesia',
        file: 'id.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    vueI18n: i18n
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
    // baseURL: 'https://staging-api-web.prixa.ai'
  },

  http: {
    // proxyHeaders: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always'
        }
      }
    }
  },

  publicRuntimeConfig: {
    publicApiBaseUrl: process.env.API_BASE_URL
  }
}
