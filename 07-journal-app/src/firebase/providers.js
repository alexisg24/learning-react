import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from 'firebase/auth'
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
    // Update profile
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    return {
      ok: true,
      photoURL,
      uid,
      email,
      displayName
    }
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

export const signInWithEmailPassword = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { email: mail, displayName, photoURL, uid } = userCredential.user
    return {
      ok: true,
      photoURL,
      uid,
      email: mail,
      displayName
    }
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

export const signOutFn = async () => {
  try {
    await signOut(FirebaseAuth)
  } catch (error) {
    return {
      ok: false
    }
  }
}
