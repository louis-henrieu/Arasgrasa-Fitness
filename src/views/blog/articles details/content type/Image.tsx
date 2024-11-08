import ArticleTypes from "src/types/ArticleTypes"
import Image from 'next/image'

const ImageArticle = ({ article, index }: { article: ArticleTypes, index : number }) => {
  return (
    <div key={index}>
      <h2>{article.content[index].title}</h2>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Image width={500} height={500} src={article.content[index].image ?? ''} alt="Blog image"/>
      </div>
      <p>{article.content[index].description}</p>
    </div>
  )
}

export default ImageArticle;