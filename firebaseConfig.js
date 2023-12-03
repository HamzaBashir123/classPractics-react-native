// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21I3WqEjVk6ijskj6y4B_K6vlKrSm4n0",
  authDomain: "sunday-5fb19.firebaseapp.com",
  projectId: "sunday-5fb19",
  storageBucket: "sunday-5fb19.appspot.com",
  messagingSenderId: "953346479392",
  appId: "1:953346479392:web:a0103bbd29953ab761b345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth, getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword }