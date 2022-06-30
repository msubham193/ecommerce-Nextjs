// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk1DGqt6Nw-CkmBk4MmBgvlJUUnCpRw4g",
  authDomain: "nextjs-ecommerce-application.firebaseapp.com",
  projectId: "nextjs-ecommerce-application",
  storageBucket: "nextjs-ecommerce-application.appspot.com",
  messagingSenderId: "333867068964",
  appId: "1:333867068964:web:696051d9c7f2356a6eb2b1",
  measurementId: "G-76BN1SZVVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();