import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import store from './store';

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIRWEqv3tvoedOmiAMaberfGnHmzdumEA",
  authDomain: "superstepvue.firebaseapp.com",
  projectId: "superstepvue",
  storageBucket: "superstepvue.appspot.com",
  messagingSenderId: "1014323233078",
  appId: "1:1014323233078:web:a34dc8ee599e2768bc7397",
  measurementId: "G-57ME77LNWQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore bağlantısı
const db = getFirestore(firebaseApp);

// Auth durumunu dinle
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Kullanıcı oturum açtıysa
    console.log('Kullanıcı Oturum Açtı:', user.email);
  } else {
    // Kullanıcı oturumu kapattıysa
    console.log('Kullanıcı Oturumu Kapattı.');
  }
});

// Vue Router oluştur
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App);
app.use(store);
app.config.globalProperties.$auth = getAuth(firebaseApp);
app.config.globalProperties.$db = getFirestore(firebaseApp);
app.mount('#app');