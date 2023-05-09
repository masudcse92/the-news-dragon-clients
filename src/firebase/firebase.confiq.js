// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LWKIN0gk3eRkXk6UR4U0ZlIibMsJ5B8",
  authDomain: "the-news-dragon-client-c6742.firebaseapp.com",
  projectId: "the-news-dragon-client-c6742",
  storageBucket: "the-news-dragon-client-c6742.appspot.com",
  messagingSenderId: "190989084870",
  appId: "1:190989084870:web:50e25b0cad53a9657acfc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;