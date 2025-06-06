
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCivw4cW0xncdlxpGpeFLYHhYUWKseDB3s",
  authDomain: "vanlife-878be.firebaseapp.com",
  projectId: "vanlife-878be",
  storageBucket: "vanlife-878be.firebasestorage.app",
  messagingSenderId: "1016577829738",
  appId: "1:1016577829738:web:efc7ddaa0fd31df9959313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}