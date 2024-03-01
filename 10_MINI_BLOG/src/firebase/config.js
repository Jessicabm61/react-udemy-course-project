//Config firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiD1m27pxAMZFp3fI27j6S7atP1JmnFFg",
  authDomain: "mini-blog-f92c9.firebaseapp.com",
  projectId: "mini-blog-f92c9",
  storageBucket: "mini-blog-f92c9.appspot.com",
  messagingSenderId: "926420378149",
  appId: "1:926420378149:web:58eabd814742febc9015cc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };