import PropTypes from 'prop-types';

const Product = ({ name, sku, images, price, description, availableQty, category, sellerInfo }) => {
  return (
    <div className="card mb-4">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={images[0]} className="card-img" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><strong>SKU:</strong> {sku}</p>
            <p className="card-text"><strong>Category:</strong> {category}</p>
            <p className="card-text"><strong>Price:</strong> ${price}</p>
            <p className="card-text"><strong>Available Quantity:</strong> {availableQty}</p>
            <p className="card-text">{description}</p>
            <p className="card-text"><strong>Seller Info:</strong> {sellerInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  availableQty: PropTypes.number.isRequired,
  category: PropTypes.oneOf(['electronics', 'sports', 'fashion']).isRequired,
  sellerInfo: PropTypes.string.isRequired,
};

export default Product;
