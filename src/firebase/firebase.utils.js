import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMdazRbzUs-f0-GXnZ6oXedXOhRC2Lij0",
    authDomain: "crwn-db-7327b.firebaseapp.com",
    databaseURL: "https://crwn-db-7327b.firebaseio.com",
    projectId: "crwn-db-7327b",
    storageBucket: "crwn-db-7327b.appspot.com",
    messagingSenderId: "463983775054",
    appId: "1:463983775054:web:a410d83204a6d6a63a221f",
    measurementId: "G-XDB0XNVRLL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;