// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRlH9ACr91KSf-SShXg_-cM5nzzp-WXI",
  authDomain: "journalapp-452c4.firebaseapp.com",
  projectId: "journalapp-452c4",
  storageBucket: "journalapp-452c4.appspot.com",
  messagingSenderId: "706025968673",
  appId: "1:706025968673:web:2e74b09685680b82e8bf60",
  measurementId: "G-P1FGKXL4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);