// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgnNt2jUaSI3ZsqWXciWXB8_aWfXUaLJs",
  authDomain: "authcontext-8e928.firebaseapp.com",
  projectId: "authcontext-8e928",
  storageBucket: "authcontext-8e928.appspot.com",
  messagingSenderId: "43151613977",
  appId: "1:43151613977:web:920395b61efb3c3f4cca88",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
