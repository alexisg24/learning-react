import { collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore'
import { FirebaseDB } from '../../firebase/config'
import { addNewNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './journalSlice'
import { fileUpload, loadNotes } from '../../helpers'

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

export const startSavingNotes = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth
    if (!uid) throw new Error('UID is required')
    const { active: note } = getState().journal
    const noteToFireStore = { ...note }
    delete noteToFireStore.id
    const journalRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await updateDoc(journalRef, noteToFireStore)
    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())
    // await fileUpload(files[0])
    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }
    const photosUrls = await Promise.all(fileUploadPromises)
    dispatch(setPhotosToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth
    if (!uid) throw new Error('UID is required')
    const { active: note } = getState().journal
    const journalRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(journalRef)
    dispatch(deleteNoteById(note.id))
  }
}
