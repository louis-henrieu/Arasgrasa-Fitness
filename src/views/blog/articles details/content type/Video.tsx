import { Typography } from "@mui/material";
import ArticleTypes from "src/types/ArticleTypes"

const VideoArticle = ({ article, index }: { article: ArticleTypes, index: number}) => {
  return (
    <div key={index}>
      <Typography variant="h1">{article.content[index].title}</Typography>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <iframe width='80%' max-width='800px' height='450px' src={article.content[index].link ?? ""} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <br/>
      <Typography variant="h6">{article.content[index].description}</Typography>
    </div>
  )
}

export default VideoArticle;