import { db, collection, getDocs } from "./firebase-config.js";

window.loadFirebaseProducts = async function () {
  const snap = await getDocs(collection(db, "products"));

  if (!snap.empty) {
    window.menuItems = snap.docs.map(doc => ({
      firebaseId: doc.id,
      ...doc.data()
    }));

    console.log("Firebase products loaded:", window.menuItems.length);
  }
};