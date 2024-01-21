export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 
 
 router:{
  mode: "history",
  routes: [{
    path: "/",
    name: "home",
    component: "HomePage",
  },
  {
    path: "/login",
    name: "LoginPage",
    component: "LoginPage",
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: "HomePage",
  },
]
 },
 
 
 
  head: {
    title: 'superstep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  proxy: {
    '/cms': 'https://akn-ss.a-cdn.akinoncloud.com',
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildModules: [
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyDIRWEqv3tvoedOmiAMaberfGnHmzdumEA',
      authDomain:  "superstepvue.firebaseapp.com",
      projectId:  "superstepvue",
      storageBucket: "superstepvue.appspot.com",
      messagingSenderId: "1014323233078",
      appId: "1:1014323233078:web:a34dc8ee599e2768bc7397",
      measurementId: "G-57ME77LNWQ"    },
    services: {
      auth: true, 
    },
  },
}