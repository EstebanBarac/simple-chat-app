import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl0bPTvRbLAGcxerLmJVAQ-fvuYM0wqRw",
  authDomain: "chat-app-27906.firebaseapp.com",
  projectId: "chat-app-27906",
  storageBucket: "chat-app-27906.appspot.com",
  messagingSenderId: "664486608710",
  appId: "1:664486608710:web:2b9546ddf961fd8980ef47"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()