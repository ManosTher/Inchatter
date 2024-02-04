// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4s9A4zNi3iXMp8rAsDEbd-uOVSqgd5sQ",
  authDomain: "inchatter-b8a14.firebaseapp.com",
  projectId: "inchatter-b8a14",
  storageBucket: "inchatter-b8a14.appspot.com",
  messagingSenderId: "926645802877",
  appId: "1:926645802877:web:d55afc53129e17b8c49e14",
  measurementId: "G-S0LF51W6QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {app , auth };