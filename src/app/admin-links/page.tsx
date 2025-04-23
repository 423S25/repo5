"use client";

// Same setup as announcements page, but for managing links
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, firebaseConfig } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavBar } from "../components/Navbar";
import { getApp, getApps, initializeApp } from "firebase/app";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'], display: 'swap' });
const montserratBold = Montserrat({ weight: '900', subsets: ['latin'], display: 'swap' });

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AdminLinksPage() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [links, setLinks] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email === "admin@hrdc.com") {
        setUser(currentUser);
        fetchLinks();
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchLinks = async () => {
    const snapshot = await getDocs(collection(db, "links"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLinks(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !url) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "links"), {
        title,
        url,
        timestamp: serverTimestamp(),
      });
      setTitle("");
      setUrl("");
      setSuccess("Link added successfully!");
      fetchLinks();
    } catch (err: any) {
      console.error("error posting link:", err);
      setError("Failed to add link.");
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "links", id));
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  const handleSaveEdit = async (id: string) => {
    await updateDoc(doc(db, "links", id), {
      title: editTitle,
      url: editUrl,
    });
    setEditId(null);
    setEditTitle("");
    setEditUrl("");
    fetchLinks();
  };

  return (
    <>
      <NavBar />
      <div style={{ width: "100%", minHeight: "100vh", background: "#003E52", display: "flex", justifyContent: "center", paddingTop: "100px" }}>
        <div style={{ width: 980, background: "white", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset", paddingBottom: "100px" }}>
          <div className="flex justify-center mt-10">
            <div style={{ width: 800, background: "#147278", borderRadius: 20, boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)", padding: 20, color: "white" }}>
              <h2 className={`${montserratBold.className} text-2xl mb-4`}>Add New Link</h2>
              <div style={{ background: "white", color: "black", borderRadius: 20, padding: 20 }}>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                {success && <p className="text-green-600 mb-2">{success}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-10">
                  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className={`${montserrat.className} border p-2 rounded`} />
                  <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} className={`${montserrat.className} border p-2 rounded`} />
                  <button type="submit" className={`${montserratBold.className} bg-green-600 text-white py-2 px-4 rounded`}>Add Link</button>
                </form>

                <h2 className={`${montserratBold.className} text-2xl mb-4`}>Existing Links</h2>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.id} className="border rounded p-4 bg-gray-50">
                      {editId === link.id ? (
                        <>
                          <input className={`${montserrat.className} border p-1 w-full mb-2`} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                          <input className={`${montserrat.className} border p-1 w-full mb-2`} value={editUrl} onChange={(e) => setEditUrl(e.target.value)} />
                          <button className="text-green-600 text-sm mr-4" onClick={() => handleSaveEdit(link.id)}>Save</button>
                          <button className="text-gray-500 text-sm" onClick={() => setEditId(null)}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <h3 className={`${montserratBold.className} text-lg`}>{link.title}</h3>
                          <a href={link.url} target="_blank" className="text-blue-500 underline">{link.url}</a>
                          <div className="mt-2">
                            <button className="text-blue-600 text-sm mr-4" onClick={() => {
                              setEditId(link.id);
                              setEditTitle(link.title);
                              setEditUrl(link.url);
                            }}>Edit</button>
                            <button onClick={() => handleDelete(link.id)} className="text-red-600 text-sm">Delete</button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
