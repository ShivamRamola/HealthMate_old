// js/firebase.js

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAg50rti6abDSWQDQ3_pycvTfsZAl-kpF0",
    authDomain: "healthmate-c8c57.firebaseapp.com",
    projectId: "healthmate-c8c57",
    storageBucket: "healthmate-c8c57.appspot.com",
    messagingSenderId: "598997529149",
    appId: "1:598997529149:web:9dec330ff23ca99c86b054"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Firestore reference
  const db = firebase.firestore();
  
  // Sign in anonymously (for demo/testing)
  firebase.auth().signInAnonymously().catch(console.error);
  
  // Make db available globally
  window.db = db;
  