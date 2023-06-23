import { Box, Toolbar } from '@mui/material'
import { Navbar, SideBar } from '../components'

const drawerWith = 240

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Nabar drawerWith */}
      <Navbar drawerWith={drawerWith} />
      {/* sidebar drawerWith */}
      <SideBar drawerWith={drawerWith} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export { JournalLayout }
