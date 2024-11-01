import ArticleTypes from 'src/types/ArticleTypes'
import { ContentArticleEnum } from 'src/types/ContentArticleEnum';
import ImageArticle from './content type/Image'
import TextArticle from './content type/Text'
import VideoArticle from './content type/Video'
import { display } from '@mui/system';
import { ArticleSchemaOrg } from 'src/views/schema-org';

const Article = ({ article }: { article: ArticleTypes }) => {
  return (
    <div>
      <ArticleSchemaOrg title={article.title} description={article.description} image={article.image} date={article.date} author={article.author} link={article.link} content={article.content.map((content) => content.description).join(' ')} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>{article.title}</h1>
        <img style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '95%', maxHeight: '70vh' }} src={article.image} alt={article.title} />
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