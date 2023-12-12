import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIDic9-_RU7naSXPXoInO9Qvtm0o0Ofk8",
  authDomain: "noteapp-c2944.firebaseapp.com",
  databaseURL: "https://noteapp-c2944-default-rtdb.firebaseio.com",
  projectId: "noteapp-c2944",
  storageBucket: "noteapp-c2944.appspot.com",
  messagingSenderId: "450609444450",
  appId: "1:450609444450:web:7a621b7cbbee07c54fc33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const FIREBASE = firebase;

export default FIREBASE;
