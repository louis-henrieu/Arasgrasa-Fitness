import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import Articles from "src/data/Articles";
import Article from "src/views/blog/articles details/Article";
import ArticleTypes from "src/types/ArticleTypes";


const BlogPost = ({ article }: { article: ArticleTypes }) => {
  if (!article) return <h1>Article not found</h1>;

  return (
    <Fragment>
      <Head>
        <title>{article.title + "- Arasgrasa Fitness"}</title>
        <meta name="description" content={article.description.short} />
        <link rel="canonical" href={`https://arasgrasa.fr/blog/${article.link}`} />
        <meta property="og:title" content={`${article.title} - Arasgrasa Fitness`} />
        <meta property="og:description" content={article.description.short} />
        <meta property="og:url" content={`https://arasgrasa.fr/blog/${article.link}`} />
        <meta property="og:image" content={`https://arasgrasa.fr${article.image}`} />
        <meta property="og:type" content="article" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${article.title} - Arasgrasa Fitness`} />
        <meta property="twitter:description" content={article.description.short} />
        <meta property="twitter:image" content={`https://arasgrasa.fr${article.image}`} />
        <meta property="twitter:url" content={`https://arasgrasa.fr/blog/${article.link}`} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="twitter:url" content={`https://arasgrasa.fr/blog/${article.link}`} />
        <link rel="alternate" href={`https://arasgrasa.fr/blog/${article.link}`} hrefLang="en"/>
        <link rel="alternate" href={`https://arasgrasa.fr/blog/${article.link}`} hrefLang="fr"/>
        <link rel="alternate" href={`https://arasgrasa.fr/blog/${article.link}`} hrefLang="x-default"/>
      </Head>
      <Article article={article} />
    </Fragment>
  );
};

export async function getServerSideProps(context: { query: { name: any; }; }) {
  const { name } = context.query;
  const article = Articles.find((article) => article.link === (name + '/'));

  return {
    props: {
      article: article || null,
    },
  };
}

export default BlogPost;