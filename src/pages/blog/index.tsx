import Grid from "@mui/material/Grid";
import Article1 from "src/views/blog/articles list/Article1";
import Article2 from "src/views/blog/articles list/Article2";
import Article3 from "src/views/blog/articles list/Article3";
import Article4 from "src/views/blog/articles list/Article4";
import Article5 from "src/views/blog/articles list/Article5";

const BlogList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <Article1 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Article2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Article3 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Article4 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Article5 />
      </Grid>
    </Grid>
  );
};

export default BlogList;