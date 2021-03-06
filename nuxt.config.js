const webpack = require('webpack')
// set up session for the traderWeb
const bodyParser = require('body-parser')
const session = require('express-session')
// for additional route
const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CoolBitX Technology',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'traderPortal' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
    ]
  },
  /**
   * Global css
   */
  css: [
    {
      type: 'css',
      src: 'bootstrap/dist/css/bootstrap.css'
    },
    {
      type: 'css',
      src: 'static/css/reset.css'
    },
    {
      type: 'css',
      src: 'static/css/style_pc.css'
    },
    {
      type: 'css',
      src: 'static/css/style_m.css'
    },
    {
      type: 'css',
      src: 'static/css/google-font.css'
    },
    {
      type: 'css',
      src: 'static/css/self.css'
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      // const postCssLoader = config.module.rules.find((rule)=>(
      //   rule.loader === 'postcss-loader'
      // ))
      // postCssLoader.exclude = /static\/css/
    },
    /**
     * for boostrap jquery
     */
    vendor: ['jquery', 'bootstrap', 'axios'],
    plugins: [
        // set shortcut as global for bootstrap
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
  },
  /**
   * plugins
   */
  modules: [
    '@nuxtjs/font-awesome'
  ],
  serverMiddleware: [
    // body-parser middleware change context to json
    bodyParser.json(),
    // session middleware setup session config with express session
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // set up api middleware
    // '~/api'
  ]
  // ,
  // router: {
  //   extendRoutes(routes) {
  //     routes.push({
  //       name: 'api',
  //       path: '/api'

  //     })
  //   }
  // }

}
