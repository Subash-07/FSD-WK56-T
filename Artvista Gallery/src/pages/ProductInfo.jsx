import { useParams } from 'react-router-dom';
import Product from '../components/Product' ;

const productData = {
    name: 'Home decarations',
    sku: '12345',
    images: ['https://via.placeholder.com/150'],
    price: 99.99,
    description: 'This Product create More Beauty in your home.',
    availableQty: 10,
    category: 'electronics',
    sellerInfo: 'Sample Seller',
};

const ProductInfo = () => {
  const { productSku } = useParams();

  return (
    <div>
      <h1>Product Info</h1>
      <p>SKU: {productSku}</p>
      {/* Your product info code here */}
      <Product  {...productData} />
    </div>
  );
};


export default ProductInfo;

