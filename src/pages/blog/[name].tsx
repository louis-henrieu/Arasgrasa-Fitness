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
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://arasgrasa.fr/blog/${article.link}`} />
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