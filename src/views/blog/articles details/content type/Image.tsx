import ArticleTypes from "src/types/ArticleTypes"
import styles from "../../../../../styles/article.module.css"

const ImageArticle = ({ article, index }: { article: ArticleTypes, index : number }) => {
  return (
    <div key={index}>
      <h1>{article.content[index].title}</h1>
      <div className={styles.iframeContainer}>
        <img className={styles.mainContent} src={article.content[index].image ?? ''} alt="Blog image"/>
      </div>
      <p>{article.content[index].description}</p>
    </div>
  )
}

export default ImageArticle;