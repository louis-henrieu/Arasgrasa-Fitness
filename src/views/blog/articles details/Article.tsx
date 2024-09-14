import ArticleTypes from 'src/types/ArticleTypes'
import { ContentArticleEnum } from 'src/types/ContentArticleEnum';
import ImageArticle from './content type/Image'
import TextArticle from './content type/Text'
import VideoArticle from './content type/Video'
import styles from '../../../../styles/article.module.css';
import { display } from '@mui/system';

const Article = ({article} : {article : ArticleTypes}) => {
  return (
    <div>
      <div className={styles.mainContent}>
        <h1 className={styles.mainContent}>{article.title}</h1>
        <img src={article.image} alt={article.title}/>
      </div>
      <div>
        <p>{article.description}</p>
          {article.content.map((content) => {
              if (content.type === ContentArticleEnum.Image) {
                  return <ImageArticle key={content.id} article={article} index={content.id} />;
              } else if (content.type === ContentArticleEnum.Text) {
                  return <TextArticle key={content.id} article={article} index={content.id} />;
              } else if (content.type === ContentArticleEnum.Video) {
                  return <VideoArticle key={content.id} article={article} index={content.id} />;
              } else {
                  return null;
              }
          })}
      </div>
    </div>
  )
}

export default Article;