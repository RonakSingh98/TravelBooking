import React from 'react';
import './FilterBar.css'; // Ensure this file contains styles for your filter bar

const FilterBar = ({ filters, setFilters, applyFilters }) => {
  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handlePriceRangeChange = (e) => {
    const [minPrice, maxPrice] = e.target.value.split(',').map(Number);
    setFilters({ ...filters, priceRange: [minPrice, maxPrice] });
  };

  const handleBedroomsChange = (e) => {
    setFilters({ ...filters, bedrooms: Number(e.target.value) });
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const amenities = checked
        ? [...prevFilters.amenities, value]
        : prevFilters.amenities.filter((amenity) => amenity !== value);

      return { ...prevFilters, amenities };
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <div className="price-range">
          <label htmlFor="min-price">Min Price:</label>
          <input
            id="min-price"
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceRangeChange({ ...e, target: { value: `${e.target.value},${filters.priceRange[1]}` } })}
          />
          <label htmlFor="max-price">Max Price:</label>
          <input
            id="max-price"
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceRangeChange({ ...e, target: { value: `${filters.priceRange[0]},${e.target.value}` } })}
          />
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          id="bedrooms"
          type="number"
          value={filters.bedrooms}
          onChange={handleBedroomsChange}
        />
      </div>

      <div className="filter-group">
        <label>Amenities:</label>
        <div className="amenities">
          <label>
            <input
              type="checkbox"
              value="WiFi"
              checked={filters.amenities.includes('WiFi')}
              onChange={handleAmenitiesChange}
            />
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              value="Parking"
              checked={filters.amenities.includes('Parking')}
              onChange={handleAmenitiesChange}
            />
            Parking
          </label>
          <label>
            <input
              type="checkbox"
              value="Pool"
              checked={filters.amenities.includes('Pool')}
              onChange={handleAmenitiesChange}
            />
            Pool
          </label>
          {/* Add more amenities as needed */}
        </div>
      </div>

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
