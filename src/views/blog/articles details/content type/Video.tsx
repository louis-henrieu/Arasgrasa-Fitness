import ArticleTypes from "src/types/ArticleTypes"

const VideoArticle = ({ article, index }: { article: ArticleTypes, index: number}) => {
  return (
    <div key={index}>
      <h2>{article.content[index].title}</h2>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <iframe width='80%' max-width='800px' height='450px' src={article.content[index].link ?? ""} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <br/>
      <h6>{article.content[index].description}</h6>
    </div>
  )
}

export default VideoArticle;