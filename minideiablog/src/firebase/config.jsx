
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCoXlY9_7SdGsiEKSRyDKdlcPWAW1ymJb8",
  authDomain: "miniblog-vinilucas.firebaseapp.com",
  projectId: "miniblog-vinilucas",
  storageBucket: "miniblog-vinilucas.appspot.com",
  messagingSenderId: "556308412333",
  appId: "1:556308412333:web:631009a4984f984d649324",
  measurementId: "G-F7P0E0RD6L"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);