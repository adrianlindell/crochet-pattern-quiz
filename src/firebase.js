import firebase from 'firebase'

//config file from firebase console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "coderssb-project-w21.firebaseapp.com",
  databaseURL: "https://coderssb-project-w21-default-rtdb.firebaseio.com",
  projectId: "coderssb-project-w21",
  storageBucket: "coderssb-project-w21.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

//get a reference to the database service
var database = firebase.database();

export {
  database as default
};