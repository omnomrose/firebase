// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTvtPXv-KURstXtLgdmfveqQfzzTNztEs",
    authDomain: "mdia-3126-firebase-lab.firebaseapp.com",
    projectId: "mdia-3126-firebase-lab",
    storageBucket: "mdia-3126-firebase-lab.appspot.com",
    messagingSenderId: "605730437010",
    appId: "1:605730437010:web:c5700baa73a5fd82fdb34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);