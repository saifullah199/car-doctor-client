// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE7583Pqqba-_9iSLYy9WfSkNL2o1HIXs",
  authDomain: "car-doctor-4003f.firebaseapp.com",
  projectId: "car-doctor-4003f",
  storageBucket: "car-doctor-4003f.appspot.com",
  messagingSenderId: "815324912461",
  appId: "1:815324912461:web:1cebef6f15e7055d77b504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
