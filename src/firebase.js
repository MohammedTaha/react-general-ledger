import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCu8JpwDCP4a-tgYs9_N0XpBN5uF7hjGP0",
    authDomain: "generalledger-21b08.firebaseapp.com",
    databaseURL: "https://generalledger-21b08.firebaseio.com",
    projectId: "generalledger-21b08",
    storageBucket: "generalledger-21b08.appspot.com",
    messagingSenderId: "540959178815"
  };
  
let firebaseApp = firebase.initializeApp(config);
let firebaseDB = firebaseApp.database();
let firebaseAuth = firebase.auth();

export{
    firebaseDB,
    firebaseAuth
}