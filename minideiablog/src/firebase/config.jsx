// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyART5tAg-KG9zrKP_a2wTMuuacQ5Lt3Axg",
  authDomain: "miniblog-victor-nicolau.firebaseapp.com",
  projectId: "miniblog-victor-nicolau",
  storageBucket: "miniblog-victor-nicolau.appspot.com",
  messagingSenderId: "745048863188",
  appId: "1:745048863188:web:aa65c55a9e7d720a25a641",
  measurementId: "G-52B1Y2CVD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);