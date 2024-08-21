import PropTypes from 'prop-types';

import products from '../assets/json-data/product.json';

const Product = ({ name, price }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Price: ${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const ProductListing = () => {
    return (
    <div className="container mt-5">
      <h1>Product Page</h1>
      {products.map((product) => (
        <Product key={product.SKU} {...product} />
      ))}
      </div>  
    );
  };
  
export default ProductListing;
