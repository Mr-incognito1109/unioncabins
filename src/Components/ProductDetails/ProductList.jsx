import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { products } from '../../data/productData';

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.mainImage} alt={product.name} />
            </div>
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={`/product/${product.id}`} className="learn-more-btn">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;