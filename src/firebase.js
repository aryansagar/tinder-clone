import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCnRmNWU8KmL60_qOUMRrIfFu_ajcUR908",
    authDomain: "tinder-clone-c5a52.firebaseapp.com",
    projectId: "tinder-clone-c5a52",
    storageBucket: "tinder-clone-c5a52.appspot.com",
    messagingSenderId: "244325831137",
    appId: "1:244325831137:web:c08ceb9d985d26692dc2a0",
    measurementId: "G-LT7N9XPPXV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;