import { useparams } from 'react-router-dom';

const ProductInfo = () => {
  const { productSku } = useparams();

  return (
    <div>
      <h1>ProductInfo: {productSku}</h1>
      {/* Your product info code here */}
    </div>
  );
};

export default ProductInfo;