import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpvULaPGIBuZU_D2wGeHCigeSTpGL3RFo",
    authDomain: "tenedores-31461.firebaseapp.com",
    projectId: "tenedores-31461",
    storageBucket: "tenedores-31461.appspot.com",
    messagingSenderId: "637622975746",
    appId: "1:637622975746:web:3bbcb939b58d982fc2d61b"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);