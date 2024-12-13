// src/firebase/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHHba1OATN4EUoumBIlK-rMzyTnDLGfvU",
    authDomain: "social-media-feed-337b6.firebaseapp.com",
    projectId: "social-media-feed-337b6",
    storageBucket: "social-media-feed-337b6.firebasestorage.app",
    messagingSenderId: "875595285025",
    appId: "1:875595285025:web:c0b4b0f749dd5d3b605960",
    measurementId: "G-PQ6N552HYY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

export { auth, provider, db };
