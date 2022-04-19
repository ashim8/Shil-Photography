// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAiIUzbb9REqG57kctQ2vH-FUKIT-jZyQ",
  authDomain: "assignment10-988a4.firebaseapp.com",
  projectId: "assignment10-988a4",
  storageBucket: "assignment10-988a4.appspot.com",
  messagingSenderId: "1049214097027",
  appId: "1:1049214097027:web:fef3f15ca2e64a3dceadb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;