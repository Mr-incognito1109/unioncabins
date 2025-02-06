import React from 'react';
import cabin2 from '../../assets/cabin2.jpg';
import './Whychooseus.css';

const Whychooseus = () => {
  return (
    <div className="whychooseus-container">
      <div className="content">
        <h2>Why Choose Us?</h2>
        <p>
          Choosing us for your portable cabin needs means partnering with a trusted leader in the industry, known for delivering exceptional quality and unmatched value. We specialize in creating versatile, durable, and highly functional cabins that can be customized to suit any purpose from office spaces to temporary accommodations to security cabins. Our cabins are built to withstand the test of time, using eco-conscious materials and advanced construction methods that ensure both strength and sustainability. With a keen eye for detail, our team works closely with you to bring your vision to life, providing efficient, cost-effective solutions without compromising on design or performance. Whether for short-term or long-term use, you can rely on us for seamless delivery, installation, and customer service every step of the way. We ensure that every cabin we deliver enhances both functionality and environmental responsibility.
        </p>
      </div>
      <div className="image-container">
        <img src={cabin2} alt="cabin2" />
        {/* <button className="get-price-button">View Products</button> */}
      </div>
    </div>
  );
};

export default Whychooseus;