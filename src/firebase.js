import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDTqxvhksaylyK1MIUJ_jcmEKkkjVt0VJE",
    authDomain: "hulkweb--clone.firebaseapp.com",
    projectId: "hulkweb--clone",
    storageBucket: "hulkweb--clone.appspot.com",
    messagingSenderId: "106884248328",
    appId: "1:106884248328:web:58026c3f6d168ddbd6f2bd",
    measurementId: "G-BBETR4L0DN"
  };
  // Initialize Firebase
 const app= firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 const db=firebase.firestore();
 const Provider= new firebase.auth.GoogleAuthProvider();
 export {db ,auth,Provider}