import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-ObnyGC45ueLL2U-kD-aVkeRPAn3Vhxk",
    authDomain: "spotify-clone-9eb21.firebaseapp.com",
    projectId: "spotify-clone-9eb21",
    storageBucket: "spotify-clone-9eb21.appspot.com",
    messagingSenderId: "889476989877",
    appId: "1:889476989877:web:52fe4d160740b750c60ffc",
    measurementId: "G-8H5D2RQ07G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }