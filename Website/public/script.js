// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    ,
    
const firebaseConfig = {
  apiKey: "AIzaSyCfchBLTflNyZ-P1nOXmMFDSLJAob3j10g",
  authDomain: "tec-park.firebaseapp.com",
  projectId: "tec-park",
  storageBucket: "tec-park.appspot.com",
  messagingSenderId: "756938005815",
  appId: "1:756938005815:web:bd733b565872393ac70eb2",
  measurementId: "G-LHCP2DRZWM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase UI with Firebase Authentication
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Firebase UI Configuration
var uiConfig = {
    signInSuccessUrl: '/', // Redirect URL after sign-in success
    signInOptions: [
        // Add sign-in providers you want to offer (e.g., Google, Email/Password)
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // You can add more providers here
    ],
};

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User successfully logged in, you can redirect or perform other actions here.
          const user = userCredential.user;
          console.log('Logged in as: ', user.email);
      })
      .catch((error) => {
          // Handle login errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Login error: ', errorMessage);
      });
}
