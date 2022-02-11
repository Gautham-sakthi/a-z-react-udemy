// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_DQaADJN9zJvahC5gLgDgjhf-3LlPHQE",
  authDomain: "a-z-udemy.firebaseapp.com",
  projectId: "a-z-udemy",
  storageBucket: "a-z-udemy.appspot.com",
  messagingSenderId: "148762821098",
  appId: "1:148762821098:web:45f68b54600df0bdc4b293",
  measurementId: "G-Z6JFCQ0CVJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
