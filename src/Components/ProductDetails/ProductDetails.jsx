import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import './ProductDetails.css';
import { products } from '../../data/productData';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return (
    <div className="not-found-container">
      <h1>Product Not Found</h1>
      <p>The product you are looking for does not exist.</p>
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Go Back
      </button>
    </div>
  );

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Back
      </button>
      
      <div className="product-details-content">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.hoverImages[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-container">
            {product.hoverImages?.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          
          <div className="features-section">
            <h2>Key Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {product.specifications && (
            <div className="specifications-section">
              <h2>Specifications</h2>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="button-group">
            <button className="enquiry-button" onClick={() => window.location.href = 'tel:+919987236011 '}>
              <Phone size={20} />
              Enquire Now!
            </button>
            <button className="view-products-button" onClick={() => navigate('/products')}>
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;