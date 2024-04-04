// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARej5wG5jBCmAb30yvtM4yWfCugzGraRY",
  authDomain: "userauth-5d106.firebaseapp.com",
  projectId: "userauth-5d106",
  storageBucket: "userauth-5d106.appspot.com",
  messagingSenderId: "753714018438",
  appId: "1:753714018438:web:6671f5c67defbe0449b907",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
