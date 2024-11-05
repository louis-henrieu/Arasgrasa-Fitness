import Grid from "@mui/material/Grid";
import ArticleTypes from "src/types/ArticleTypes";
import { useRouter } from "next/router";
import BlogInfo from "src/views/blog/articles list/BlogInfo";
import Articles from "src/data/Articles";
import Head from "next/head";

const BlogList = () => {
  const router = useRouter()
  const currentBlogId = router.query.id
  return (
    <div>
      <Head>
        <meta name="description" content="Read the latest articles on fitness, health, and wellness on our blog. Stay updated with tips, guides, and expert advice." />
      </Head>
      <h1>Blog List</h1>
      <Grid container spacing={6}>
        {Articles.map((article: ArticleTypes) => (
          <Grid item xs={12} md={6} lg={4} key={article.id}>
            <BlogInfo key={article.id} article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );

};

export default BlogList;