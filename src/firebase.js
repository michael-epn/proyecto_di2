import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYqZ-qZ4QrZbUC7ZbZoyawK3JSHwhDkE",
  authDomain: "remarco-6900b.firebaseapp.com",
  projectId: "remarco-6900b",
  storageBucket: "remarco-6900b.firebasestorage.app",
  messagingSenderId: "695775633174",
  appId: "1:695775633174:web:b37cee97bf4df03aba7a37",
  measurementId: "G-V6G28T9DHE"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)


export const authFirebase=getAuth();
export const dbFirebase=getFirestore(appFirebase);

export default appFirebase;