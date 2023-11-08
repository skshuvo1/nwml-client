// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6RFbVss1cQGpkHMcMpQyoUTTKc7ms1Jo",
  authDomain: "nwml-firebase-auth.firebaseapp.com",
  projectId: "nwml-firebase-auth",
  storageBucket: "nwml-firebase-auth.appspot.com",
  messagingSenderId: "766785156688",
  appId: "1:766785156688:web:6ab12c390fb4490e678355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;