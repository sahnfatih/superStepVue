
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDIRWEqv3tvoedOmiAMaberfGnHmzdumEA",
  authDomain: "superstepvue.firebaseapp.com",
  projectId: "superstepvue",
  storageBucket: "superstepvue.appspot.com",
  messagingSenderId: "1014323233078",
  appId: "1:1014323233078:web:a34dc8ee599e2768bc7397",
  measurementId: "G-57ME77LNWQ",
};

initializeApp(firebaseConfig);
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/login',
        name: 'login',
        component: resolve(__dirname, 'pages/LoginPage.vue'),
      });
    },
  },
  

 
 
 
  head: {
    title: 'nuxt-app',
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
    '~/plugins/firebase.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/router',
    '@nuxt/firebase',
    "@nuxtjs/vuex",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
 

  firebase: {
    config: {
      apiKey: "AIzaSyDIRWEqv3tvoedOmiAMaberfGnHmzdumEA",
      authDomain: "superstepvue.firebaseapp.com",
      projectId: "superstepvue",
      storageBucket: "superstepvue.appspot.com",
      messagingSenderId: "1014323233078",
      appId: "1:1014323233078:web:a34dc8ee599e2768bc7397",
      measurementId: "G-57ME77LNWQ",
    },
    services: {
      auth: true, 
    },
  },
}