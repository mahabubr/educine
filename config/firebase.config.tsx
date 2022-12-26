// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjNQFZlYiiQdFk5Ylg0yLP3nFPs41gYkg",
    authDomain: "educine-c10d4.firebaseapp.com",
    projectId: "educine-c10d4",
    storageBucket: "educine-c10d4.appspot.com",
    messagingSenderId: "517350452421",
    appId: "1:517350452421:web:4757d35ab42358069e54ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app