"use client";

// importing necessary react and next tools
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// importing firebase functions
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp, // needed for type
} from "firebase/firestore";

import { auth, firebaseConfig } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavBar } from "../components/Navbar";
import { getApp, getApps, initializeApp } from "firebase/app";

// make sure we only initialize firebase once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// define a type for announcements so TS stops complaining
type Announcement = {
  id: string;
  title: string;
  content: string;
  author?: string;
  timestamp?: Timestamp;
};

// main page function
export default function AnnouncementsPage() {
  // state variables for login, inputs, error, messages, and fetched announcements
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const router = useRouter();

  // runs when page loads or user changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // only allow admin to post or delete
      if (currentUser?.email === "admin@hrdc.com") {
        setUser(currentUser);
        fetchAnnouncements(); // load announcements once user confirmed
      } else {
        router.push("/login"); // redirect non-admin users
      }
    });

    return () => unsubscribe(); // clean up when component unmounts
  }, [router]);

  // this gets all announcements from firebase
  const fetchAnnouncements = async () => {
    const snapshot = await getDocs(collection(db, "announcements"));
    const data: Announcement[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Announcement[];

    // sort by timestamp descending (newest first)
    data.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
    setAnnouncements(data);
  };

  // this function adds a new announcement
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !content) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "announcements"), {
        title,
        content,
        timestamp: serverTimestamp(), // this adds time of post
        author: user.email,
      });
      setTitle("");
      setContent("");
      setSuccess("Announcement posted successfully!");
      fetchAnnouncements(); // reload announcements
    } catch (err: any) {
      console.error("error posting announcement:", err);
      setError("Failed to post announcement.");
    }
  };

  // function to delete an announcement
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "announcements", id));
      setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error("error deleting announcement:", err);
    }
  };

  return (
    <>
      <NavBar />

      <div 
       style={{
          width: "100%",
          minHeight: "100vh",
          background: "#003E52",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
      <div 
        style={{
          width: 980, 
          height: "100%",
          background: "white",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
          paddingBottom: "100px",
          }}
        >

      <div className="flex justify-center mt-10">
        <div
            style={{
              width: 800,
              background: "#147278",
              borderRadius: 20,
              boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
              padding: 20,
              color: "white",
            }}
          >
        <h2 className="text-2xl font-bold mb-4">Post New Announcement</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: 20,
                  padding: 20,
                }}
              >

     

        {/* showing errors or success messages */}
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        {/* form for title and content */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-10">
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

        <h2 className="text-2xl font-bold mb-4">Existing Announcements</h2>

        {/* showing announcements */}
        <ul className="space-y-4">
          {announcements.map((a) => (
            <li key={a.id} className="border rounded p-4 bg-gray-50">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p>{a.content}</p>
              <p className="text-sm text-gray-500 mt-1">
                Posted by {a.author} on{" "}
                {a.timestamp?.seconds
                  ? new Date(a.timestamp.seconds * 1000).toLocaleString()
                  : "unknown time"}
              </p>
              <button
                onClick={() => handleDelete(a.id)}
                className="mt-2 text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
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
