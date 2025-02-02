import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// image imports
import office from '../../assets/Products/Office.jpg';
import office1 from '../../assets/Products/office-i1.jpg';
import office2 from '../../assets/Products/office-i2.jpg';
import office3 from '../../assets/Products/office-i3.jpg';
import office4 from '../../assets/Products/office-i4.jpg';
import house from '../../assets/Products/House.jpg';
import house1 from '../../assets/Products/house1.jpg';
import house2 from '../../assets/Products/house2.jpg';
import house3 from '../../assets/Products/house3.jpg';
import house4 from '../../assets/Products/house4.jpg';
import labour from '../../assets/Products/labour.jpg';
import labour1 from '../../assets/Products/labour1.jpg';
import labour2 from '../../assets/Products/labour2.jpg';
import labour3 from '../../assets/Products/labour3.jpg';
import labour4 from '../../assets/Products/labour4.jpg';
import double from '../../assets/Products/doubled.jpg';
import double1 from '../../assets/Products/doubled1.jpg';
import double2 from '../../assets/Products/doubled2.jpg';
import double3 from '../../assets/Products/doubled3.jpg';
import double4 from '../../assets/Products/doubled4.jpg';
import kitchen from '../../assets/Products/kitchen.jpg';
import kitchen1 from '../../assets/Products/kitchen1.jpg';
import kitchen2 from '../../assets/Products/kitchen2.jpg';
import security from '../../assets/Products/security.jpg';
import security1 from '../../assets/Products/security1.jpg';
import security2 from '../../assets/Products/security2.jpg';
import security3 from '../../assets/Products/security3.jpg';
import security4 from '../../assets/Products/security4.jpg';
import security5 from '../../assets/Products/security5.jpg';
import toilet from '../../assets/Products/toilet.jpg';
import toilet1 from '../../assets/Products/toilet1.jpg';
import toilet2 from '../../assets/Products/toilet2.jpg';
import toilet3 from '../../assets/Products/toilet3.jpg';
import toilet4 from '../../assets/Products/toilet4.jpg';

const Products = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverImageIndex, setHoverImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);  //added
  const containerRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Office Cabin",
      mainImage: office,
      hoverImages: [office1, office2, office3, office4],
      description: "Premium portable office cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 2,
      name: "House Cabin",
      mainImage: house,
      hoverImages: [house1, house2, house3, house4],
      description: "Premium portable house cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 3,
      name: "Labour Cabin",
      mainImage: labour,
      hoverImages: [labour1, labour2, labour3, labour4],
      description: "Premium portable labour cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 4,
      name: "Double Cabin",
      mainImage: double,
      hoverImages: [double1, double2, double3, double4],
      description: "Premium portable double cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 5,
      name: "Kitchen Cabin",
      mainImage: kitchen,
      hoverImages: [kitchen1, kitchen2],
      description: "Premium portable kitchen cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 6,
      name: "Security Cabin",
      mainImage: security,
      hoverImages: [security1, security2, security3, security4, security5],
      description: "Premium portable security cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    },
    {
      id: 7,
      name: "Toilet Cabin",
      mainImage: toilet,
      hoverImages: [toilet1, toilet2, toilet3, toilet4],
      description: "Premium portable toilet cabins designed for professional workspaces...",
      features: [
        "Durable metal framework",
        "Pre-installed electrical fittings",
        "Climate control ready",
        "Custom interior layouts",
        "Easy installation and mobility"
      ],
      specifications: {
        size: "20ft x 10ft (customizable)",
        height: "8.5ft standard height",
        material: "Steel frame with insulated panels",
        windows: "Aluminum sliding windows",
        door: "Steel security door"
      }
    }
  ];

  // Calculate the maximum index where sliding should stop
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1200) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 480) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, products.length + 1 - visibleCards);

  useEffect(() => {
    let interval;
    if (hoveredCard !== null) {
      interval = setInterval(() => {
        setHoverImageIndex((prev) => {
          const product = products.find(p => p.id === hoveredCard);
          return (prev + 1) % (product?.hoverImages.length || 4);
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [hoveredCard]);

  // Auto-slide functionality
  useEffect(() => {
    let autoSlideInterval;
    if (!hoveredCard) {
      autoSlideInterval = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) {
            return 0; // Return to start when reaching the end
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(autoSlideInterval);
  }, [hoveredCard, maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const getDisplayImage = (product) => {
    if (hoveredCard === product.id) {
      const imageIndex = hoverImageIndex % product.hoverImages.length;
      return product.hoverImages[imageIndex];
    }
    return product.mainImage;
  };

  return (
    <div className="products-section" id="products">
      <h1>Our Products</h1>
      <p className="subtitle">Choose your perfect escape</p>
      
      <div className="products-container">
      <button 
        className="nav-button prev"
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={24} />
      </button>
        
        <div 
          className="products-slider"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% / ${visibleCards}))`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onMouseEnter={() => {
                setHoveredCard(product.id);
                setHoverImageIndex(0);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setHoverImageIndex(0);
              }}
            >
              <div className="product-image">
                <img 
                  src={getDisplayImage(product)}
                  alt={product.name}
                  className={hoveredCard === product.id ? 'hover-effect' : ''}
                />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <button 
                  className="learn-more-btn" 
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}

          <div className="product-card explore-more-card" onClick={() => navigate('/products')}>
            <div className="explore-more-content">
              <h3>Explore More Cabins</h3>
              <ArrowRight size={32} className="explore-arrow" />
              <p>Discover our full collection</p>
            </div>
          </div>
        </div>

        <button 
        className="nav-button next"
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Products;