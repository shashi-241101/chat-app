import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-a23d1.firebaseapp.com",
  projectId: "chat-a23d1",
  storageBucket: "chat-a23d1.appspot.com",
  messagingSenderId: "1052495334002",
  appId: "1:1052495334002:web:d42274489ea658dc2790eb",
  measurementId: "G-F6Z02R0VGQ"

};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


