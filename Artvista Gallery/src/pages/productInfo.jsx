import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { productSku } = useParams();

  return (
    <div>
      <h1>Product Info: {productSku}</h1>
      {/* Your product info code here */}
    </div>
  );
};

export default ProductInfo;