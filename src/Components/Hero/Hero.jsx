import React, { useState, useEffect } from 'react';
import './Hero.css';
import arrow from '../../assets/right-arrow.png';
import { ChevronDown } from 'lucide-react';
// import Hero1 from '../../assets/hero1_v2.jpg';
import Hero2 from '../../assets/hero2_v2.jpg';
import Hero3 from '../../assets/hero3_v2.jpg';
import Hero4 from '../../assets/hero.jpg';
import Hero5 from '../../assets/hero4_v2.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Hero5,Hero2, Hero3, Hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className="hero container"
      style={{
        backgroundImage: `linear-gradient(rgba(72, 53, 45, 0.54), rgba(72, 53, 45, 0.54)), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="hero-text">
        <h1> Your Space, Anytime, Anywhere!</h1>
        <p>Smart, durable, and portable cabins designed for offices, security, or custom needs. Adaptable spaces that deliver functionality and flexibility anywhere.</p>
        <Link 
          to="contact" 
          smooth={true} 
          offset={-260} 
          duration={800} 
          className="btn send-enquiry-btn"
        >
          Send Enquiry <img src={arrow} alt="arrow"/>
        </Link>
      </div>
      <div className="chevron-down">
        <ChevronDown size={48} />
      </div>
    </div>
  );
};

export default Hero;