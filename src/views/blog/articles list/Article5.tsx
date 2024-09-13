// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Article5 = () => {
  return (
    <Card>
      <a href='/blog/caffeine-effects-risks-cautions' style={{ textDecoration: 'none' }} rel='canonical'>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article5/image.png' />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
          Caffeine: Effects, risks, and cautions
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Caffeine is a natural stimulant most commonly found in tea, coffee, and cacao plants. It works by stimulating the brain and central nervous system, helping you stay alert and prevent the onset of tiredness.
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default Article5
