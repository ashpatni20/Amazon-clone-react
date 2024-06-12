// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const auth = getAuth(app);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACURyTBbF2HRW8ljbA1SNOKlZSueo13h8",
  authDomain: "clone-react-4a3c4.firebaseapp.com",
  projectId: "clone-react-4a3c4",
  storageBucket: "clone-react-4a3c4.appspot.com",
  messagingSenderId: "794693666263",
  appId: "1:794693666263:web:b1ef961fc6aae6366c3792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);