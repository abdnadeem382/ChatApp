import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyACw7ZA_Bk3s3Ltp24PmU8CQZKqcIr9jeA",
    authDomain: "chatapp-dcefc.firebaseapp.com",
    projectId: "chatapp-dcefc",
    storageBucket: "chatapp-dcefc.appspot.com",
    messagingSenderId: "238053231271",
    appId: process.env.FIREBASE_APPID
  }).auth();