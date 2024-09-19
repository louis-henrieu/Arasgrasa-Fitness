import ArticleTypes from 'src/types/ArticleTypes'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const BlogInfo = ({ article }: { article: ArticleTypes }) => {
  return (
    <Card>
      <a href={article.link} style={{ textDecoration: 'none' }}>
        <CardMedia sx={{ height: '14.5625rem' }} image={article.image} />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            {article.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{article.description}</Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default BlogInfo
