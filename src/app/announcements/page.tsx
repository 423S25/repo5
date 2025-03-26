"use client";

import { useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { NavBar } from "../components/Navbar";


const db = getFirestore();

export default function AnnouncementsPage() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === "admin@hrdc.com") {
        setUser(user);
      } else {
        router.push("/login"); // redirect if not admin
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "announcements"), {
        title,
        content,
        timestamp: serverTimestamp(),
        author: user.email,
      });
      setTitle("");
      setContent("");
      setSuccess("Announcement posted successfully!");
      setError("");
    } catch (err: any) {
      setError("Failed to post announcement.");
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
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

