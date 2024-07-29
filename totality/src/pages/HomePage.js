import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList/PropertyList';
import FilterBar from '../components/FilterBar/FilterBar';
import './HomePage.css'; // Optional: Import CSS for styling

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0, 1000],
    bedrooms: 0,
    amenities: [],
  });

  useEffect(() => {
    // Fetch property data from an API or database
    const fetchProperties = async () => {
      // Example: Fetch from an API
      // const response = await fetch('/api/properties');
      // const data = await response.json();

      // Mock data
      const data = [
        {
          id: 1,
          image: 'property1.jpg',
          title: 'Cozy Apartment',
          description: 'A nice place to stay.',
          price: 120,
          location: 'New York',
          bedrooms: 2,
          amenities: ['WiFi', 'Parking'],
        },
        {
          id: 2,
          image: 'property2.jpg',
          title: 'Luxury Villa',
          description: 'Enjoy a luxurious vacation.',
          price: 300,
          location: 'Los Angeles',
          bedrooms: 4,
          amenities: ['Pool', 'WiFi'],
        },
        // Add more properties as needed
      ];

      setProperties(data);
      setFilteredProperties(data);
    };

    fetchProperties();
  }, []);

  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      const matchesLocation =
        filters.location === '' ||
        property.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPrice =
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1];
      const matchesBedrooms =
        filters.bedrooms === 0 || property.bedrooms >= filters.bedrooms;
      const matchesAmenities = filters.amenities.every((amenity) =>
        property.amenities.includes(amenity)
      );

      return (
        matchesLocation && matchesPrice && matchesBedrooms && matchesAmenities
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="home-page">
      <h1>Property Listings</h1>
      <FilterBar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default HomePage;
