// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHEZthvsvzPVt8HVzW5_6oqxusBAppmtE",
  authDomain: "photographer-436e3.firebaseapp.com",
  projectId: "photographer-436e3",
  storageBucket: "photographer-436e3.appspot.com",
  messagingSenderId: "917721073290",
  appId: "1:917721073290:web:5d32cad5ddcfe53916cf73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth