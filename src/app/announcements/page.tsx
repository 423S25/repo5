"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, firebaseConfig } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavBar } from "../components/Navbar";
import { getApp, getApps, initializeApp } from "firebase/app";


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AnnouncementsPage() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("🔒 Auth State Changed:", currentUser?.email);
      if (currentUser?.email === "admin@hrdc.com") {
        setUser(currentUser);
      } else {
        router.push("/login"); // Redirect if not admin
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !content) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "announcements"), {
        title,
        content,
        timestamp: serverTimestamp(),
        author: user.email,
      });
      console.log("✅ Announcement posted with ID:", docRef.id);
      setTitle("");
      setContent("");
      setSuccess("Announcement posted successfully!");
    } catch (err: any) {
      console.error("❌ Error posting announcement:", err);
      setError("Failed to post announcement.");
    }
  };

  return (
    <>
      <NavBar />
      <head><title>HRDC Staff Intranet</title></head>
      <div className="container mx-auto p-6 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Post New Announcement</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 rounded h-32"
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
            Post Announcement
          </button>
        </form>
      </div>
    </>
  );
}
