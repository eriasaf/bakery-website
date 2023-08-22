// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR76gHM9T20eIJ2fGSLWSWO-rpjk0AacI",
  authDomain: "bakerywebsite-1da4c.firebaseapp.com",
  projectId: "bakerywebsite-1da4c",
  storageBucket: "bakerywebsite-1da4c.appspot.com",
  messagingSenderId: "638992559278",
  appId: "1:638992559278:web:a19bf6fda436a7f747113f",
  measurementId: "G-M37FVV1PWX"
};

if (!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
  }

   export  {firebase};
 

