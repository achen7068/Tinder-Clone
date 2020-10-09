import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNc3dYapimaLgI3D1zCzeGEERAuYyiEJM",
    authDomain: "tinderclone-5df16.firebaseapp.com",
    databaseURL: "https://tinderclone-5df16.firebaseio.com",
    projectId: "tinderclone-5df16",
    storageBucket: "tinderclone-5df16.appspot.com",
    messagingSenderId: "770545337353",
    appId: "1:770545337353:web:e3291cd20d7fc54cf1e4d8",
    measurementId: "G-T88G22LLPE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;