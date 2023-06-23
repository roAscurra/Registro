 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
 import { getDatabase, ref, push, update, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, onIdTokenChanged} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAl9ykuf5dTd-PqvbAziwI8kHKYpoxvm6M",
   authDomain: "auth-b1cc8.firebaseapp.com",
   projectId: "auth-b1cc8",
   storageBucket: "auth-b1cc8.appspot.com",
   messagingSenderId: "969609438622",
   appId: "1:969609438622:web:68329fc25ad159f950a28f",
   measurementId: "G-39J1H4HTWP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 const auth = getAuth(app);