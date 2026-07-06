import { db, collection, getDocs } from "./firebase-config.js";

window.firebaseProductsReady = (async function () {
  const snap = await getDocs(collection(db, "products"));

  if (!snap.empty) {
    window.menuItems = [];
    snap.forEach(doc => {
      window.menuItems.push(doc.data());
    });
  }
})();