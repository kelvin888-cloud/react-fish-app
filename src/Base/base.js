import Rebase from "re-base";
import firebase from "firebase";

//created our firebase App
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvue8CVYPyQzvlHViq81xX9Al5h9K6oU0",
  authDomain: "catch-of-the-day-kelvin-1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kelvin-1-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-kelvin-1",
  storageBucket: "catch-of-the-day-kelvin-1.appspot.com",
  messagingSenderId: "1075463145408",
  appId: "1:1075463145408:web:bd73e54bf1b7447b1c2a25",
  measurementId: "G-BEGNWGSMHD",
});

//created our rebase binding
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

//default export
export default base;
