import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

const NothingSelected = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' color='white'>Select or create a note</Typography>
      </Grid>
    </Grid>
  )
}

export { NothingSelected }
