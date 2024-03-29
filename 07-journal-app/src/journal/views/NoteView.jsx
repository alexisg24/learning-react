import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGalery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useRef } from 'react'
import { setActiveNote, startDeletingNote, startSavingNotes, startUploadingFiles } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const NoteView = () => {
  const dispatch = useDispatch()
  const { active: activeNote, savedMessage, isSaving } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(activeNote)
  const dateString = useMemo(() => new Date(date).toUTCString(), [date])

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (savedMessage.length > 0) Swal.fire('Note Updated', savedMessage, 'success')
  }, [savedMessage])

  const onSaveNote = () => {
    dispatch(startSavingNotes())
  }

  const onFileInputClick = () => {
    fileInputRef.current.click()
  }

  const onDeleteNote = () => {
    dispatch(startDeletingNote())
  }
  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return true
    console.log('uploading')
    dispatch(startUploadingFiles(target.files))
  }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>
        <input type='file' multiple onChange={onFileInputChange} style={{ display: 'none' }} ref={fileInputRef} />

        <IconButton color='primary' disabled={isSaving} onClick={onFileInputClick}>
          <UploadOutlined />
        </IconButton>

        <Button color='primary' sx={{ padding: 2 }} onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
        <IconButton color='primary' disabled={isSaving} onClick={onDeleteNote}>
          <DeleteOutline />
        </IconButton>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Insert a title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What happened today?'
          minRows='5'
          name='body'
          value={body}
          onChange={onInputChange}
        />

        <ImageGalery images={activeNote?.imagesUrls} />
      </Grid>
    </Grid>
  )
}

export { NoteView }
