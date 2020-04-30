import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBGN81qNYlgtbPqTZ06A8k4-uT2BMndVBc",
    authDomain: "mealworm-14b23.firebaseapp.com",
    databaseURL: "https://mealworm-14b23.firebaseio.com",
    projectId: "mealworm-14b23",
    storageBucket: "mealworm-14b23.appspot.com",
    messagingSenderId: "193442139568",
    appId: "1:193442139568:web:f129a9b8c7b0702a6ada75",
    measurementId: "G-7N9466FWCE"
});

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;