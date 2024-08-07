// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoOvxQhP0qWNFireIunavk3_4Am2yWyrY",
  authDomain: "miniblog-luis.firebaseapp.com",
  projectId: "miniblog-luis",
  storageBucket: "miniblog-luis.appspot.com",
  messagingSenderId: "628931082578",
  appId: "1:628931082578:web:88a5672aa868bee2c5628b",
  measurementId: "G-TD1PD588R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);