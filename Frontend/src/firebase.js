// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAC9MmXczYjutgVUo_aSvsoQy2Xdf6Ebsg",
  authDomain: "blog-app-8fbe0.firebaseapp.com",
  projectId: "blog-app-8fbe0",
  storageBucket: "blog-app-8fbe0.firebasestorage.app",
  messagingSenderId: "400965963054",
  appId: "1:400965963054:web:4861c886fec110f17abebf",
  measurementId: "G-ZV27NMXY5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth

