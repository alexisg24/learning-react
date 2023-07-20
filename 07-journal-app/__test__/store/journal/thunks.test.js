import { collection, deleteDoc, getDocs } from 'firebase/firestore'
import { addNewNote, savingNewNote, setActiveNote } from '../../../src/store/journal'
import { startNewNote } from '../../../src/store/journal/thunks'
import { FirebaseDB } from '../../../src/firebase/config'

describe('Tests in Journal Thunks', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  beforeEach(() => jest.clearAllMocks())
  test('startNewNote should create a new empty note', async () => {
    const stateValue = { auth: { uid: '12345' } }
    getState.mockReturnValue(stateValue)
    await startNewNote()(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith(savingNewNote())
    expect(dispatch).toHaveBeenCalledWith(addNewNote({
      body: '',
      title: '',
      id: expect.any(String),
      date: expect.any(Number)
    }))
    expect(dispatch).toHaveBeenCalledWith(setActiveNote({
      body: '',
      title: '',
      id: expect.any(String),
      date: expect.any(Number)
    }))

    // Delete with firebase
    const collectionRef = collection(FirebaseDB, `${stateValue.auth.uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const deletePromises = []
    docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)))
    await Promise.all(deletePromises)
  })
})
