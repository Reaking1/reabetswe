import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyC732HWq1kqmsBqtRXr2MrrFdX9xfxEmA8",
    authDomain: "port-2f71c.firebaseapp.com",
    projectId: "port-2f71c",
    storageBucket: "port-2f71c.appspot.com",
    messagingSenderId: "659947527856",
    appId: "1:659947527856:web:e113906c752228ccbb6575",
    measurementId: "G-89GJLDXH51"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
export const storage = getStorage(app);



export const signInWithGoogle = () => signInWithPopup(auth, provider)