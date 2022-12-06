// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3SPzQVnO21XuAo8epSaAwZGt0-a9FQ8U",
  authDomain: "todo-app-7c44a.firebaseapp.com",
  projectId: "todo-app-7c44a",
  storageBucket: "todo-app-7c44a.appspot.com",
  messagingSenderId: "53521536623",
  appId: "1:53521536623:web:bb6ccddbcbf06acafb5f9a",
  measurementId: "G-9GV0Z25WTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);