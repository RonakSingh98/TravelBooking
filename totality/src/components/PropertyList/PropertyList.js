import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;
