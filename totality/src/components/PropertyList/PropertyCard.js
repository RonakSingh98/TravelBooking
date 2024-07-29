// src/components/PropertyList/PropertyCard.js

import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const PropertyCard = ({ property }) => {
  const { addToCart } = useContext(UserContext);

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Amenities: {property.amenities.join(', ')}</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
