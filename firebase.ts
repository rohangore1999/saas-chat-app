import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/fuctions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxFatY-7cgM4aFWgsihFijAwHj5HINgYs",
  authDomain: "saas-chat-app-98b60.firebaseapp.com",
  projectId: "saas-chat-app-98b60",
  storageBucket: "saas-chat-app-98b60.appspot.com",
  messagingSenderId: "1083528612542",
  appId: "1:1083528612542:web:0699672d63cb1ca18decef",
};

// checking if the app is initialize
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
