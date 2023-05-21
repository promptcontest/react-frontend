
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_k7XSdWR4mPZsTidFlq8oa-SV77aVLiw",
    authDomain: "promptcontest-356e0.firebaseapp.com",
    projectId: "promptcontest-356e0",
    storageBucket: "promptcontest-356e0.appspot.com",
    messagingSenderId: "496392590359",
    appId: "1:496392590359:web:ec77e51f12f0ea0c77b852",
    measurementId: "G-JH3XXCDFSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export { app, auth, TwitterAuthProvider, onAuthStateChanged, signInWithPopup, signOut, storage };