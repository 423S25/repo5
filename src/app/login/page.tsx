"use client";

// navbar on top
import { NavBar } from "../components/Navbar";
import { useState } from "react";
// firebase login tools
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";

import { Montserrat } from 'next/font/google';

const monsterrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

const monsterratBold = Montserrat({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");      // email state
  const [password, setPassword] = useState(""); // password state
  const [error, setError] = useState("");       // error msg

  // handle normal login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence); // keeps session
      await signInWithEmailAndPassword(auth, email, password); // logs in
      router.push("/"); // go to homepage
    } catch (err: any) {
      setError(err.message);
    }
  };

  // handle google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider); // login w/ google
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <NavBar />

      {/* full page bg */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#003E52", // dark blue bg
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
          <div className="text-center mt-10">
            <div
              style={{
                width: 980,
                background: "#A1A750", // 💛 your yellowish green background
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                padding: 20,
                color: "white",
              }}
            >
              <div className="flex flex-col items-center justify-center h-screen">
                <h1 className={`${monsterratBold.className}`}>Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* login form */}
                <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-80">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`${monsterrat.className}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className={`${monsterrat.className}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Login
                  </button>
                </form>

                {/* forgot link = more clear now */}
                <a
                  href="#"
                  className={`${monsterrat.className}`}
                >
                  Forgot your password?
                </a>

                {/* divider */}
                <div className={`${monsterrat.className}`}>OR</div>

                {/* google button */}
                <button
                  onClick={handleGoogleLogin}
                  className="{`${monsterratBold.className}`}"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
