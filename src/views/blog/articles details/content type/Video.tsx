import { Typography } from "@mui/material";
import ArticleTypes from "src/types/ArticleTypes"
import styles from "../../../../../styles/article.module.css"

const VideoArticle = ({ article, index }: { article: ArticleTypes, index: number}) => {
  return (
    <div key={index}>
      <Typography variant="h1">{article.content[index].title}</Typography>
      <div className={styles.iframeContainer}>
        <iframe width="560" height="315" src={article.content[index].link ?? ""} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <br/>
      <Typography variant="h6">{article.content[index].description}</Typography>
    </div>
  )
}

export default VideoArticle;