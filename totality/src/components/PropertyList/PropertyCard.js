import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './PropertyCard.css'; 
import { Navigate, useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const { addToCart } = useContext(UserContext);
  const Navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(property);
    Navigate('/cart');
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Amenities: {property.amenities.join(', ')}</p>
      <button onClick={handleAddToCart}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
