import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './PropertyCard.css'; 

const PropertyCard = ({ property }) => {
  const { addToCart } = useContext(UserContext);

  const handleAddToCart = () => {
    addToCart(property);
    alert(`${property.title} has been added to your cart.`);
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
