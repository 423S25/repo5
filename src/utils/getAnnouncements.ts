import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAnnouncements() {
  const q = query(collection(db, "announcements"), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("PRODUCTION getAnnouncements fetched:", results); // 👈 Debug log

  return results;
}
