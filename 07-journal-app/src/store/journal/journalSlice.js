import { createSlice } from '@reduxjs/toolkit'
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    savedMessage: '',
    notes: [],
    active: null
    // active: {
    //   id: 'ABC',
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imagesUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true
    },
    addNewNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.savedMessage = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
      state.savedMessage = ''
    },
    setSaving: (state) => {
      state.isSaving = true
      // Todo: message
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => (note.id !== action.payload.id) ? note : action.payload)
      state.savedMessage = `${action.payload.title}, actualizada correctamente!`
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imagesUrls = [...state.active.imagesUrls, ...action.payload]
      state.isSaving = false
    },
    clearNotesLogout: (state, action) => {
      state.isSaving = false
      state.savedMessage = ''
      state.notes = []
      state.active = null
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
      state.active = null
      state.isSaving = false
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions
