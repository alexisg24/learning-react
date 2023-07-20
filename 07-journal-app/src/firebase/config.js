// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getEnvironments } from '../helpers'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnvironments()
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
}

// testing
// const firebaseConfig = {
//   apiKey: 'AIzaSyAduChGH7qEDAdgqJeITI5uCarekgyRHdc',
//   authDomain: 'test-react-journal-23575.firebaseapp.com',
//   projectId: 'test-react-journal-23575',
//   storageBucket: 'test-react-journal-23575.appspot.com',
//   messagingSenderId: '909471401817',
//   appId: '1:909471401817:web:47b0cb72f684108a19ee48'
// }

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
