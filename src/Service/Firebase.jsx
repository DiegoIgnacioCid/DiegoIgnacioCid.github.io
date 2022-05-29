// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp0E9fFj3qsk08diNvEP8Oyj1idV_CGCA",
  authDomain: "kase-12483.firebaseapp.com",
  projectId: "kase-12483",
  storageBucket: "kase-12483.appspot.com",
  messagingSenderId: "379257088363",
  appId: "1:379257088363:web:b9d7f7c7334f2dbb6dc42e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db