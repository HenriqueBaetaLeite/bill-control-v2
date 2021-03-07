import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

import "dotenv/config";

const firebaseConfig = {
  apiKey: "AIzaSyDakzCt2PCDELr0IdkTpoLXPyYAF4NefcU",
  authDomain: "bill-control-54b6f.firebaseapp.com",
  projectId: "bill-control-54b6f",
  storageBucket: "bill-control-54b6f.appspot.com",
  messagingSenderId: "101637116352",
  appId: "1:101637116352:web:312bb94b8a8c2a4f293825",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const addUser = async (user) => {
  const isUser = await db.collection("users").doc().set({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return isUser;
};

export const gmailLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await app.auth().signInWithPopup(provider);
  return result;
};
export const auth = app.auth();

export default app;

export const userLogin = async () => {
  const provider = new firebase.auth.EmailAuthProvider();
  const result = await app.auth().signInWithEmailAndPassword(provider);
  return result;
};
