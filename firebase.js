// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-6EAQunaDAHZgrMJS_ogeWZhIsuTeZak",
  authDomain: "signos-2.firebaseapp.com",
  projectId: "signos-2",
  storageBucket: "signos-2.appspot.com",
  messagingSenderId: "1069700562912",
  appId: "1:1069700562912:web:22c74bfb727095291a3585",
  measurementId: "G-NRRZEEP7E8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
