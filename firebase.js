// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import firebase from "firebase/app";
import "firebase/firestore";




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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);


export { auth, database, analytics};
export default firebase.firestore();
