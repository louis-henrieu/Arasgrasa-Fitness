// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Article3 = () => {
  return (
    <Card>
      <a href='/blog/you-need-vitamine-d' style={{ textDecoration: 'none' }} rel='canonical'>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article3/image.png' />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
          Why do we need Vitamine D? What happens when we lack it
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Vitamine D is a fat-soluble vitamin that is essential for good health. It helps the body absorb calcium and phosphorus from the food we eat.
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default Article3
