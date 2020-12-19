 
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database'; 
import 'firebase/auth';
import 'firebase/storage';  




 
const firebaseConfig = {
    apiKey: "AIzaSyB_hAcsT2-uPBpHLHU60OReGJVNAogM8EQ",
    authDomain: "everymoment-1f0a0.firebaseapp.com",
    projectId: "everymoment-1f0a0",
    storageBucket: "everymoment-1f0a0.appspot.com",
    messagingSenderId: "974543809509",
    appId: "1:974543809509:web:6ba970ccc004e8d56f1d0c",
    measurementId: "G-BKRF0SH98P"
  };


  firebase.initializeApp(firebaseConfig); 
  firebase.firestore();


  export default firebase;
