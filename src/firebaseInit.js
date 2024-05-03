// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD71JxTWo1lnJ78ITWQO_XmflESIoN3TZE",
  authDomain: "blogging-app-srikanth.firebaseapp.com",
  projectId: "blogging-app-srikanth",
  storageBucket: "blogging-app-srikanth.appspot.com",
  messagingSenderId: "198618573904",
  appId: "1:198618573904:web:0ff0c9c8e9079600f67555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);