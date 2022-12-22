
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6bMUESSfMxiisHowtLWidHCdWv35JzoE",
  authDomain: "proyecto-coder-5fe2f.firebaseapp.com",
  projectId: "proyecto-coder-5fe2f",
  storageBucket: "proyecto-coder-5fe2f.appspot.com",
  messagingSenderId: "374018303075",
  appId: "1:374018303075:web:8c667981e9c611c7dc8456"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

 export default db;