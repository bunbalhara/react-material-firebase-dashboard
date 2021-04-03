/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import "firebase/storage";


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBwAEIIqNoaTHW_OkDVO4Y9-i5WEWavFBo",
  authDomain: "masseurs-dev.firebaseapp.com",
  databaseURL: "https://masseurs-dev-default-rtdb.firebaseio.com",
  projectId: "masseurs-dev",
  storageBucket: "masseurs-dev.appspot.com",
  messagingSenderId: "532669460851",
  appId: "1:532669460851:web:7646eae3aa80278478d506",
  measurementId: "G-LBN5KBNDQW"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
