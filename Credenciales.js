// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOoGW3ZZ-WF3pNlmFKwSSdXG5_W0gVB-4",
  authDomain: "apps-5f8c6.firebaseapp.com",
  projectId: "apps-5f8c6",
  storageBucket: "apps-5f8c6.appspot.com",
  messagingSenderId: "943514646394",
  appId: "1:943514646394:web:fbee6f4e5f2298128408c3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;