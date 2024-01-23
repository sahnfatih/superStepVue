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

export default defineNuxtPlugin(() => {
 // Your Firebase setup logic here
});