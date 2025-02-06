import React from 'react';
import cabin1 from '../../assets/aboutus.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>Welcome to Union Cabin</h2>
        <p>
          At Union Cabin, we are dedicated to exceeding customer expectations with high-quality, affordable portable cabins. Our cabins offer a flexible, cost-effective solution for temporary accommodation, especially in the construction industry. Designed for safety and comfort, they are easy to transport and ideal for any location. With a focus on quality, prompt delivery, and competitive pricing, we’ve earned a reputation as a trusted leader in our field. Our commitment to customer satisfaction and tailored solutions helps us build long-lasting, profitable relationships.
        </p>
      </div>
      <div className="image-container">
        <img src={cabin1} alt="cabin1" />
        {/* <button className="get-price-button">Learn More</button> */}
      </div>
    </div>
  );
};

export default About;