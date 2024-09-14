
const ProductImage = ({ image, title }: { image: string, title: string }) => {
  return (
    <img style={{ width: '100%', height: 'auto', borderRadius: '20px' }} alt={title} src={image} />
  );
};

export default ProductImage;