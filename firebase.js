import { initializeApp } from "firebase/app";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyCSOq-TpL66cR3J3ACJ1--biptV4T19glo",
  authDomain: "salubermd-app.firebaseapp.com",
  projectId: "salubermd-app",
  storageBucket: "salubermd-app.appspot.com",
  messagingSenderId: "541093936504",
  appId: "1:541093936504:web:2081ab60d593c3d7951c8d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;