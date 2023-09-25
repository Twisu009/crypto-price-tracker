import React from 'react';

function CryptoFilter({ filters, setFilters }) {
  const handleFilterChange = (event) => {
    // Extracts the name and checked properties from the event.target
    const { name, checked } = event.target;

    // Updates the filters state based on the checkbox clicked
    setFilters({ ...filters, [name]: checked });
  };

  return (
    <div className="crypto-filter">
      <label>
        Bitcoin
        
      </label>
    </div>
  );
}

export default CryptoFilter;