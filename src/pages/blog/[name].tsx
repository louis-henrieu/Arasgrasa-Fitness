import { useRouter } from "next/router";
import Article1 from "src/views/blog/articles details/Article1";
import Article2 from "src/views/blog/articles details/Article2";
import Article3 from "src/views/blog/articles details/Article3";
import Article4 from "src/views/blog/articles details/Article4";
import Article5 from "src/views/blog/articles details/Article5";

const BlogDetails = ({ name }: { name: string }) => {
  switch (name) {
    case 'benefits-arasgrasa-plant':
      return <Article1 />;
    case 'essential-vitamin-b6':
      return <Article2 />;
    case 'stay-young-taurine':
      return <Article3 />;
    case 'you-need-vitamine-d':
      return <Article4 />;
    case 'caffeine-effects-risks-cautions':
      return <Article5 />;
    default:
      return null;
  }
};

const BlogPost = () => {
  const router = useRouter();
  const { name } = router.query;

  return <BlogDetails name={name as string} />;
};

export default BlogPost;    