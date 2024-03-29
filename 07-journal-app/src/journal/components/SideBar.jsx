import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { SidebarItem } from './SidebarItem'

const SideBar = ({ drawerWith }) => {
  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
                notes.map(({ id, ...note }) => (
                  <SidebarItem key={id} {...note} id={id} />
                ))
            }
        </List>
      </Drawer>
    </Box>
  )
}

export { SideBar }
