// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVa179Ie9eQLFv8bjhfRFKAzrADCkc-6M",
  authDomain: "miniblog-danilo-fa273.firebaseapp.com",
  projectId: "miniblog-danilo-fa273",
  storageBucket: "miniblog-danilo-fa273.appspot.com",
  messagingSenderId: "894007259230",
  appId: "1:894007259230:web:28f58cbb9b337faa11c4cf",
  measurementId: "G-TH6FJHKS91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);