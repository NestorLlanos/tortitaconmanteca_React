import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGfWAKajRR_kjszOirTiRC_QH1P0qaQxU",
  authDomain: "tortita-con-manteca.firebaseapp.com",
  projectId: "tortita-con-manteca",
  storageBucket: "tortita-con-manteca.appspot.com",
  messagingSenderId: "271036347955",
  appId: "1:271036347955:web:0e180dc5f410d7b7c11546"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);