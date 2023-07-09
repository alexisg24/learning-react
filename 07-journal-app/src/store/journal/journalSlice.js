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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

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
  savingNewNote
} = journalSlice.actions
