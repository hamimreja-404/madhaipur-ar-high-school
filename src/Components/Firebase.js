// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKupp9iC2BRSvyOHeAYzx1b8ouZyxV1Us",
  authDomain: "madhaipurarhighschool.firebaseapp.com",
  projectId: "madhaipurarhighschool",
  storageBucket: "madhaipurarhighschool.firebasestorage.app",
  messagingSenderId: "738538170184",
  appId: "1:738538170184:web:b49a450171ce23e961757d",
  measurementId: "G-J13MQEWH2D",
  databaseURL:"https://madhaipurarhighschool-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);