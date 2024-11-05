import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import Products from "src/data/Products";
import ProductDetail from "src/views/products/details/ProductDetail";


const Product = () => {
  const router = useRouter();
  const { name } = router.query;

  const product = Products.find((product) => product.link === (name + '/'));

  if (!product) return (
    <h1>Article not found</h1>
  );
  return (
    <Fragment>
      <Head>
        <title>{product.title + "- Arasgrasa Fitness"}</title>
        <meta name="description" content={product.description.short} />
      </Head>
      <ProductDetail product={product} />
    </Fragment>
  );
}

export default Product;