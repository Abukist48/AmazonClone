// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAbWpe1n-60BOCGjnlsteP8yDFlhjzQPCE",
	authDomain: "fir-dd032.firebaseapp.com",
	projectId: "fir-dd032",
	storageBucket: "fir-dd032.appspot.com",
	messagingSenderId: "104585972510",
	appId: "1:104585972510:web:51b21afb9e75e79fc8d70f",
	measurementId: "G-50ER7C7DYE",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };