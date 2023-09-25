import React, { useState } from 'react';

function CryptoSearch({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    // Used to handle input change
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Called the handleSearch function with the current searchTerm
    handleSearch(searchTerm);
  };

  return (
    <div className="crypto-search">
      <input
        type="text"
        placeholder="Search by name or symbol"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default CryptoSearch;