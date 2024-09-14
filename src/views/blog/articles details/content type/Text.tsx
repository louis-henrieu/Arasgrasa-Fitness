import ArticleTypes from "src/types/ArticleTypes"

const TextArticle =  ({ article, index }: { article: ArticleTypes, index : number }) => {
  return (
    <div key={index}>
      <h1>{article.content[index].title}</h1>
      <p>{article.content[index].description}</p>
    </div>
  )
}

export default TextArticle;