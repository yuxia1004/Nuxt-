module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
        src: './vconsole.min.js',
      },
      // 可以写入 js代码
      {
        innerHTML: 'new VConsole()',
        type: 'text/javascript'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview',
    {
      src: '~/plugins/apis.js',
      ssr: false //启动时执行自动build,属于服务端渲染是没有window,设置启动不加载
    },
    {
      src: '~/node_modules/lib-flexible',
      ssr: false
    },
    {
      src: '~/node_modules/storejs',
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy'
  ],
  styleResources: {
    scss: './assets/index.scss'
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  proxy: {
    '/bsk': {
      target: 'http://m.bestcake.com', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/bsk': '', //将 /api 替换掉
      },
    }
  }
}
