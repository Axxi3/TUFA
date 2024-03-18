// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9auGTZLAMYW6NoFq98TXoNEF-yaLxgUY",
  authDomain: "sample-bdc7b.firebaseapp.com",
  databaseURL: "https://sample-bdc7b-default-rtdb.firebaseio.com",
  projectId: "sample-bdc7b",
  storageBucket: "sample-bdc7b.appspot.com",
  messagingSenderId: "766082070433",
  appId: "1:766082070433:web:3674b4bfd5ea0f70a0bde0",
  measurementId: "G-CQ6MXJJ76C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);

export const auth=getAuth(app)

