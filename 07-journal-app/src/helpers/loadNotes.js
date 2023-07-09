import { getDocs, collection } from 'firebase/firestore'
import { FirebaseDB } from '../firebase/config'

export const loadNotes = async (uid = '') => {
  const docRef = collection(FirebaseDB, `${uid}/journal/notes`)
  const { docs } = await getDocs(docRef)
  const parsedDocs = docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return parsedDocs
}
