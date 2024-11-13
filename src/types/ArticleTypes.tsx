import { ContentArticleEnum } from "./ContentArticleEnum";

type ArticleTypes = {
  id: number;
  title: string;
  description: {
    short: string;
    long: string;
  }
  image: string;
  link: string;
  date: string;
  author: string;
  content: {
    id: number;
    title: string | null;
    description: string | null;
    image: string | null;
    link: string | null;
    type: ContentArticleEnum
  } []
};

export default ArticleTypes;