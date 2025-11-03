// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApyr31b9bGzUHY5sq33pMCY_5Zc08seuU",
  authDomain: "final-auth-8c82e.firebaseapp.com",
  projectId: "final-auth-8c82e",
  storageBucket: "final-auth-8c82e.firebasestorage.app",
  messagingSenderId: "151280396565",
  appId: "1:151280396565:web:eac20e41e50d5a9adee11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);