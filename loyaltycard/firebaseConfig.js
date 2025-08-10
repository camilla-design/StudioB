// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7pNfYaczG8XrFAQiOpYTEu00Lmw3mN_w",
  authDomain: "studiob-loyaltycard.firebaseapp.com",
  projectId: "studiob-loyaltycard",
  storageBucket: "studiob-loyaltycard.firebasestorage.app",
  messagingSenderId: "755044939789",
  appId: "1:755044939789:web:8934577766dcc5f4a17d44",
  measurementId: "G-0S4TGP947B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);