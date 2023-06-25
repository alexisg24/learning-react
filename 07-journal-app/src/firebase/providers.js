import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config'

const GoogleProvider = new GoogleAuthProvider()
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, GoogleProvider)
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const registerWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { photoURL, uid } = userCredential.user
    console.log({ userCredential })
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}
