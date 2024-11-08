import { Fragment } from "react";
import Head from "next/head";
import Products from "src/data/Products";
import ProductDetail from "src/views/products/details/ProductDetail";
import ProductTypes from "src/types/ProductTypes";

const Product = ({ product }: { product: ProductTypes }) => {
  if (!product) return <h1>Article not found</h1>;

  return (
    <Fragment>
      <Head>
        <title>{product.title + "- Arasgrasa Fitness"}</title>
        <meta name="description" content={product.description.short} />
        <link rel="canonical" href={`https://arasgrasa.fr/product/${product.link}`} />
      </Head>
      <ProductDetail product={product} />
    </Fragment>
  );
};

export async function getServerSideProps(context: { query: { name: any; }; }) {
  const { name } = context.query;
  const product = Products.find((product) => product.link === (name + '/'));

  return {
    props: {
      product: product || null,
    },
  };
}

export default Product;