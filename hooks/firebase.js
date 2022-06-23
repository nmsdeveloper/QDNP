import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD52eu8wZByW51ytoGLevu3f4cY1-39Qr0",
  authDomain: "nms-projet.firebaseapp.com",
  projectId: "nms-projet",
  storageBucket: "nms-projet.appspot.com",
  messagingSenderId: "250532322646",
  appId: "1:250532322646:web:a7463fd92f113f1576caf7",
  measurementId: "G-J99L24SQJT",
};

/* INITIALIZE FIREBASE */
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const database = getFirestore(app);
const storage = getStorage(app);

/* AUTHENTIFICATION */
export const statusUser = (email, password) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
};

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const connectUser = (username, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const connectUSerWithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const connectUSerWithFacebook = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};

export const deconnectUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};

/* DATABASE */
export const addData = () => {
  try {
    const docRef = addDoc(collection(database, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readData = () => {
  const querySnapshot = getDocs(collection(database, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

/* STOCKAGE */
