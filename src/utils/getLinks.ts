import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig"; 

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define the expected shape of each link
type Link = {
  id: string;
  title: string;
  url: string;
};

// Fetch links from the "links" collection and return them with proper types
export async function getLinks(): Promise<Link[]> {
  const snapshot = await getDocs(collection(db, "links"));
  const links = snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Link, "id">), // Safely cast to the expected type
  }));
  return links;
}
