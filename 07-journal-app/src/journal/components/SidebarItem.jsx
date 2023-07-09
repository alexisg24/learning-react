import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
const fixStrings = (str, ln = 17) => {
  return str.length > ln
    ? str.substring(0, ln).trim() + '...'
    : str
}
const SidebarItem = ({ title = '', body }) => {
  const newTitle = useMemo(() => fixStrings(title), [title])
  const newDesc = useMemo(() => fixStrings(body, 20), [title])
  return (
    <ListItem disablePadding>
      <ListItemButton>
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
