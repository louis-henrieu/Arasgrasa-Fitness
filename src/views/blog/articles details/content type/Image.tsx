import ArticleTypes from "src/types/ArticleTypes"

const ImageArticle = ({ article, index }: { article: ArticleTypes, index : number }) => {
  return (
    <div key={index}>
      <h1>{article.content[index].title}</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <img style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} src={article.content[index].image ?? ''} alt="Blog image"/>
      </div>
      <p>{article.content[index].description}</p>
    </div>
  )
}

export default ImageArticle;