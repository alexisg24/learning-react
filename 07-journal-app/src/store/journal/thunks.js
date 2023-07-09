import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { FirebaseDB } from '../../firebase/config'
import { addNewNote, setActiveNote, savingNewNote, setNotes } from './journalSlice'
import { loadNotes } from '../../helpers'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
    const { uid } = getState().auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id
    dispatch(addNewNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('UID is required')
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}
