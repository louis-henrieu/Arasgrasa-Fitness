import { useRouter } from "next/router";
import Products from "src/data/Products";
import ProductDetail from "src/views/apps/products/details/ProductDetail";


const Product = () => {
  const router = useRouter();
  const { name } = router.query;

  const product = Products.find((product) => product.link === name);

  if (!product)
    return <h1>Product not found 😖</h1>;

  return (<ProductDetail product={product} />);
}

export default Product;