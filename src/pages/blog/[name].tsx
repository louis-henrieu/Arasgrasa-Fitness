import { useRouter } from "next/router";
import Articles from "src/data/Articles";
import Article from "src/views/blog/articles details/Article";

const BlogPost = () => {
  const router = useRouter();
  const { name } = router.query;

  const article = Articles.find((article) => article.link === (name + '/'));

  if (!article) return (
      <h1>Article not found</h1>
  );
  return (<Article article={article} />)
};

export default BlogPost;