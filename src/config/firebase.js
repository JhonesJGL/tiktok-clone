// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFcMNKIrKvsY4GpmkWGNP1HnKI5bZBt4U",
  authDomain: "tiktok---clone-e18ff.firebaseapp.com",
  projectId: "tiktok---clone-e18ff",
  storageBucket: "tiktok---clone-e18ff.appspot.com",
  messagingSenderId: "296760968592",
  appId: "1:296760968592:web:3847c74d7ce78c4efbdf15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
