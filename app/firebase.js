// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh2lQcqEVcV4Ix0EmcJpccx1sb2pLHZbI",
  authDomain: "charming-stationery.firebaseapp.com",
  projectId: "charming-stationery",
  storageBucket: "charming-stationery.appspot.com",
  messagingSenderId: "698872626287",
  appId: "1:698872626287:web:54debcca7afa60d3ad619a",
  measurementId: "G-SMT9ECTE3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };