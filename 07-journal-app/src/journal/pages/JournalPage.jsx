import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'
import { AddOutlined } from '@mui/icons-material'

const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoteView /> */}
      <NothingSelected />

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
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}

export { JournalPage }
