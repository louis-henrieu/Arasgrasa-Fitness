// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#1D9BF0' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h5'
          sx={{ display: 'flex', mb: 2.75, alignItems: 'center', color: 'common.white', '& svg': { mr: 2.5 } }}
        >
          <Icon icon='tabler:brand-twitter' />
          Twitter Card
        </Typography>
        <Typography sx={{ mb: 3, color: 'common.white' }}>
          Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
          well.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/4.webp' sx={{ width: 34, height: 34, mr: 2.75 }} />
            <Typography sx={{ color: 'common.white' }}>Mary Vaughn</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5, '& svg': { mr: 1.25 } }}>
              <Icon icon='tabler:heart' />
              <Typography sx={{ color: 'common.white' }}>1.2k</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.25 } }}>
              <Icon icon='tabler:share' />
              <Typography sx={{ color: 'common.white' }}>80</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
