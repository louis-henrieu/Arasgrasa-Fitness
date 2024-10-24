// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 'bold',
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))


const FooterContent = () => {
  // ** Var

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'left' }}>
          {`© ${new Date().getFullYear()}, Made with `}
          <Box component='span' sx={{ mx: 1, color: 'error.main' }}>
            ❤️
          </Box>
          {`by`}
          <Typography sx={{ ml: 1 }} target='_blank' href='https://arasgrasa.fr/' component={StyledCompanyName}>
            Arasgrasa
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography sx={{ mr: 0.2, display: 'flex', color: 'text.secondary' }}>
            THIS IS A STUDENT PROJECT,  MADE FOR EDUCATIONAL PURPOSES ONLY
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterContent
