import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { 
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzgkDuV8mx-FcjVToazj1DYJXG6UejlGU",
  authDomain: "anfield-menu.firebaseapp.com",
  projectId: "anfield-menu",
  storageBucket: "anfield-menu.firebasestorage.app",
  messagingSenderId: "801865277916",
  appId: "1:801865277916:web:be36293ce3825116746f19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
};