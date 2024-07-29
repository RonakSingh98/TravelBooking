import React from 'react';

const FilterBar = ({ filters, setFilters, applyFilters }) => {
  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    setFilters({ ...filters, priceRange: newRange });
  };

  const handleBedroomsChange = (e) => {
    setFilters({ ...filters, bedrooms: parseInt(e.target.value, 10) });
  };

  const handleAmenitiesChange = (e) => {
    const amenity = e.target.value;
    const newAmenities = e.target.checked
      ? [...filters.amenities, amenity]
      : filters.amenities.filter((a) => a !== amenity);
    setFilters({ ...filters, amenities: newAmenities });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={handleLocationChange}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={filters.priceRange[0]}
        onChange={(e) => handlePriceChange(e, 0)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={filters.priceRange[1]}
        onChange={(e) => handlePriceChange(e, 1)}
      />
      <input
        type="number"
        placeholder="Bedrooms"
        value={filters.bedrooms}
        onChange={handleBedroomsChange}
      />
      <div>
        <label>
          <input
            type="checkbox"
            value="WiFi"
            onChange={handleAmenitiesChange}
            checked={filters.amenities.includes('WiFi')}
          />
          WiFi
        </label>
        <label>
          <input
            type="checkbox"
            value="Parking"
            onChange={handleAmenitiesChange}
            checked={filters.amenities.includes('Parking')}
          />
          Parking
        </label>
        <label>
          <input
            type="checkbox"
            value="Pool"
            onChange={handleAmenitiesChange}
            checked={filters.amenities.includes('Pool')}
          />
          Pool
        </label>
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
