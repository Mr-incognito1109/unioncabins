import React from 'react';
import './ClientSatisfaction.css';
import clientSatisfactionImage from '../../assets/client_satisfaction.jpg';

const ClientSatisfaction = () => {
    return (
        <div className="client-satisfaction">
            <div className="client-content">
                <h2>Client Satisfaction</h2>
                <p>
                    Client satisfaction is at the heart of everything we do, and our commitment to excellence ensures 
                    that every prefabricated structure we deliver exceeds expectations. By prioritizing customization 
                    and understanding the unique requirements of each client, we provide solutions that are not only 
                    functional but also perfectly aligned with their needs and space constraints. Our personalized 
                    approach, attention to detail, and seamless execution leave our clients confident in their 
                    investment. The trust we build and the satisfaction we garner drive us to continually innovate, 
                    ensuring that every project reflects our dedication to quality, precision, and unmatched service.
                </p>
            </div>
            <div className="image-container">
                <img src={clientSatisfactionImage} alt="Client Satisfaction" />
                <button className="get-price-button">Get Best Price</button>
            </div>
        </div>
    );
};

export default ClientSatisfaction;