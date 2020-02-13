import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC3ibnALnjw_ydtVowOV5qRCk4kbU0TZrw",
    authDomain: "messages2-89956.firebaseapp.com",
    databaseURL: "https://messages2-89956.firebaseio.com",
    projectId: "messages2-89956",
    storageBucket: "messages2-89956.appspot.com",
    messagingSenderId: "561149807672",
    appId: "1:561149807672:web:692f4833b6093e70e0aacd",
    measurementId: "G-514M347YL9"
});

export default firebase.firestore()
