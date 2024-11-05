import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import Articles from "src/data/Articles";
import Article from "src/views/blog/articles details/Article";

const BlogPost = () => {
  const router = useRouter();
  const { name } = router.query;

  const article = Articles.find((article) => article.link === (name + '/'));

  if (!article) return (
    <Fragment>
      <Head>
        <title>Article not found - Arasgrasa Fitness</title>
        <meta name="description" content="The article you are looking for does not exist. Please check the URL and try again." />
      </Head>
      <h1>Article not found</h1>
    </Fragment>
  );
  return (
    <Fragment>
      <Head>
        <title>{article.title + "- Arasgrasa Fitness"}</title>
        <meta name="description" content={article.description} />
      </Head>
      <Article article={article} />
    </Fragment>
  );
};

export default BlogPost;