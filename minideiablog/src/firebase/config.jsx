// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzvetyzpLnlV6-4duZfRuskmiDnEBcHMU",
  authDomain: "miniblog-icoma.firebaseapp.com",
  projectId: "miniblog-icoma",
  storageBucket: "miniblog-icoma.appspot.com",
  messagingSenderId: "643979843568",
  appId: "1:643979843568:web:94507c223cddc1cd20ef35",
  measurementId: "G-005V8EV8BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);