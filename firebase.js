// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGb9bmXaG5JQesjIpr3MAfn05-dmq-AXw",
  authDomain: "unicoin-6c0b9.firebaseapp.com",
  projectId: "unicoin-6c0b9",
  storageBucket: "unicoin-6c0b9.appspot.com",
  messagingSenderId: "581296756845",
  appId: "1:581296756845:web:2a214fb2082e815f628764",
  measurementId: "G-GQ3NLR8MLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
