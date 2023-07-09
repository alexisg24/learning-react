import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, active: activeNote } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
      {(activeNote) ? <NoteView /> : <NothingSelected />}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.6, transition: 'all .3s ease-out' },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={isSaving}
        onClick={onClickNewNote}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}

export { JournalPage }
