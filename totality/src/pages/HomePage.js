import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList/PropertyList';
import FilterBar from '../components/FilterBar/FilterBar';
import './HomePage.css';
import propert1 from '../images/pic1.jpg'
import propert2 from '../images/pic2.jpg'
import propert3 from '../images/pic3.jpg'
import propert4 from '../images/pic4.jpg'
import propert5 from '../images/pic5.jpg'
import propert6 from '../images/pic6.jpg'
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
          image: propert1,
          title: 'Cozy Apartment',
          description: 'A nice place to stay.',
          price: 120,
          location: 'New York',
          bedrooms: 2,
          amenities: ['WiFi', 'Parking'],
        },
        {
          id: 2,
          image: propert2,
          title: 'Luxury Villa',
          description: 'Enjoy a luxurious vacation.',
          price: 300,
          location: 'Los Angeles',
          bedrooms: 4,
          amenities: ['Pool', 'WiFi'],
        },
        {
          id: 3,
          image: propert3,
          title: 'Paradise Hotel',
          description: 'Experience comfort and style in every corner.',
          price: 200,
          location: 'New York',
          bedrooms: 2,
          amenities: ['Pool', 'Parking'],
        },
        {
          id: 4,
          image: propert4,
          title: 'Elegant Manor',
          description: 'Your perfect getaway awaits you here.',
          price: 300,
          location: 'Los Angeles',
          bedrooms: 4,
          amenities: ['Parking', 'WiFi'],
        },
        {
          id: 5,
          image: propert5,
          title: 'Grand Estate',
          description: 'Unwind and relax in serene surroundings.',
          price: 300,
          location: 'New York',
          bedrooms: 4,
          amenities: ['Pool', 'Parking'],
        },
        {
          id: 6,
          image: propert6,
          title: 'Elegant Manor',
          description: 'Discover a cozy retreat you will love.',
          price: 300,
          location: 'Los Angeles',
          bedrooms: 4,
          amenities: ['Pool', 'WiFi'],
        },
       
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
