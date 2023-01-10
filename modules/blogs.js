import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import firebaseConfig from "./firebase.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getBlogs() {
  const queriesCol = collection(db, "Blogs");
  const querySnapshot = await getDocs(queriesCol);
  const queries = querySnapshot.docs.map((doc) => doc.data());
  return queries;
}

export async function getBlogInputs(image, blogTitle, description) {
collection(db, "Blogs").add({
    "Blog-image": image,
    title: blogTitle,
    "blog-content": description,
  });
}



