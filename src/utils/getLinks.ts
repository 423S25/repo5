import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig"; // adjust path if needed

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getLinks() {
  const snapshot = await getDocs(collection(db, "links"));
  const links = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return links;
}
