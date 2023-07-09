// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXXKljNRo3Dokq-KyqqkmYjj71gKWCofM',
  authDomain: 'react-cursos-62c59.firebaseapp.com',
  projectId: 'react-cursos-62c59',
  storageBucket: 'react-cursos-62c59.appspot.com',
  messagingSenderId: '510586506327',
  appId: '1:510586506327:web:1e75723bfcb3cbec0aa712'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
