import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBmPrIo9LRrjfwZCpanMIcApkMtKGomw8M",
  authDomain: "html-teaching.firebaseapp.com",
  projectId: "html-teaching",
  storageBucket: "html-teaching.appspot.com",
  messagingSenderId: "342417165755",
  appId: "1:342417165755:web:a648294e590edb83b1889e",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
