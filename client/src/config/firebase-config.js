import firebase from "firebase/compat"

const firebaseConfig = {
    apiKey: "AIzaSyDebxZHb3bShM6ZxtNu6NGAsStNlnXD4Y4",
    authDomain: "rocket-app-333217.firebaseapp.com",
    projectId: "rocket-app-333217",
    storageBucket: "rocket-app-333217.appspot.com",
    messagingSenderId: "658395953513",
    appId: "1:658395953513:web:57fb578a9c77c5c56925f8",
    measurementId: "G-TEGHQ85RVZ"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase;