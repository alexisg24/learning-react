import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'
const fixStrings = (str, ln = 17) => {
  return str.length > ln
    ? str.substring(0, ln).trim() + '...'
    : str
}
const SidebarItem = ({ title = '', body, id, date, imagesUrls = [] }) => {
  const dispatch = useDispatch()
  const newTitle = useMemo(() => fixStrings(title), [title])
  const newDesc = useMemo(() => fixStrings(body, 20), [title])
  const setNote = (id) => {
    dispatch(setActiveNote({ id, title, body, date, imagesUrls }))
  }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => setNote(id)}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newDesc} />
        </Grid>

      </ListItemButton>
    </ListItem>
  )
}

export { SidebarItem }
