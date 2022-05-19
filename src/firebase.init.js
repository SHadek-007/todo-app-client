// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0vpzcoCf6Pe_wNpigQC5Yh5JrLD838U",
  authDomain: "todo-app-a39e7.firebaseapp.com",
  projectId: "todo-app-a39e7",
  storageBucket: "todo-app-a39e7.appspot.com",
  messagingSenderId: "785158268448",
  appId: "1:785158268448:web:d48258951daea726e8fe45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;