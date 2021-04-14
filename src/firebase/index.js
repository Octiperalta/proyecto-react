import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC6jxONQUQaXxGHaPYWUVmyp5T4qcByHsI",
  authDomain: "wbikes-a35d5.firebaseapp.com",
  projectId: "wbikes-a35d5",
  storageBucket: "wbikes-a35d5.appspot.com",
  messagingSenderId: "714046022432",
  appId: "1:714046022432:web:269daab7be110ff7f56d45",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
