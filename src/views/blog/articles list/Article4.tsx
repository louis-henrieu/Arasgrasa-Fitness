// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Article4 = () => {
  return (
    <Card>
      <a href='/blog/stay-young-taurine' style={{ textDecoration: 'none' }} rel='canonical'>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article4/image.png' />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
          How the Taurine helps to stay young
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Taurine is a type of amino acid that is essential for good health. It is found in high concentrations in the brain, heart, and blood.
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default Article4
