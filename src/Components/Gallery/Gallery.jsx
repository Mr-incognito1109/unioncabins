import React, { useState } from 'react';
import './Gallery.css';
import cabin1 from '../../assets/cabin1.jpg';
import cabin2 from '../../assets/cabin2.jpg';
import labour from '../../assets/Products/labour.jpg';
import office from '../../assets/Products/office-i1.jpg';
import security from '../../assets/Products/security.jpg';
import storage from '../../assets/Products/toilet.jpg';
import kitchen from '../../assets/Products/kitchen.jpg';
import labour1 from '../../assets/Products/labour1.jpg';
import labour2 from '../../assets/Products/labour2.jpg';
import labour3 from '../../assets/Products/labour3.jpg';
import labour4 from '../../assets/Products/labour4.jpg';
import office2 from '../../assets/Products/office-i2.jpg';
import office3 from '../../assets/Products/office-i3.jpg';
import office4 from '../../assets/Products/office-i4.jpg';
import kitchen2 from '../../assets/Products/kitchen2.jpg';
import security2 from '../../assets/Products/security2.jpg';
import security3 from '../../assets/Products/security3.jpg';
import security4 from '../../assets/Products/security4.jpg';
import security5 from '../../assets/Products/security5.jpg';
import toilet2 from '../../assets/Products/toilet2.jpg';
import toilet3 from '../../assets/Products/toilet3.jpg';
import toilet4 from '../../assets/Products/toilet4.jpg';
import doublecabin from '../../assets/Products/doubled.jpg';
import doublecabin1 from '../../assets/Products/doubled1.jpg';



const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: cabin1, alt: 'Security Cabin' },
    { id: 2, src: cabin2, alt: 'Office Cabin' },
    { id: 3, src: labour, alt: 'Labour Cabin' },
    { id: 4, src: office, alt: 'Office Cabin' },
    { id: 5, src: security, alt: 'Security Cabin' },
    { id: 6, src: storage, alt: 'Storage Cabin' },
    { id: 7, src: kitchen, alt: 'Kitchen Cabin' },
    { id: 8, src: labour1, alt: 'Labour Cabin' },
    { id: 9, src: labour2, alt: 'Labour Cabin' },
    { id: 10, src: labour3, alt: 'Labour Cabin' },
    { id: 11, src: labour4, alt: 'Labour Cabin' },
    { id: 12, src: office2, alt: 'Office Cabin' },
    { id: 13, src: office3, alt: 'Office Cabin' },
    { id: 14, src: office4, alt: 'Office Cabin' },
    { id: 15, src: kitchen2, alt: 'Kitchen Cabin' },
    { id: 16, src: security2, alt: 'Security Cabin' },
    { id: 17, src: security3, alt: 'Security Cabin' },
    { id: 18, src: security4, alt: 'Security Cabin' },
    { id: 19, src: security5, alt: 'Security Cabin' },
    { id: 20, src: toilet2, alt: 'Toilet Cabin' },
    { id: 21, src: toilet3, alt: 'Toilet Cabin' },
    { id: 22, src: toilet4, alt: 'Toilet Cabin' },
    { id: 23, src: doublecabin, alt: 'Double Cabin' },
    { id: 24, src: doublecabin1, alt: 'Double Cabin' }

  ];

  return (
    <div className="gallery-container">
      <h1>Our Cabin Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-content" />
          <div className="modal-caption">{selectedImage.alt}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;