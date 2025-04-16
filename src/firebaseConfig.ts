

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiwPAqmronY2YMgAVsAni0bxi7XTnFah0",
  authDomain: "hrdc-73317.firebaseapp.com",
  projectId: "hrdc-73317",
  storageBucket: "hrdc-73317.appspot.com",
  messagingSenderId: "784860955231",
  appId: "1:784860955231:web:b7024a957ca9a9a440d1ea"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, firebaseConfig };
