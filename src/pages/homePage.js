import React, { useState, useEffect } from 'react';
import CryptoList from '../components/cryptoList';
import CryptoFilter from '../components/cryptoFilter';
import CryptoSearch from '../components/cryptoSearch';
import Pagination from '../components/pagination';
import CryptoGraph from '../components/cryptoGraph';
//import CryptoDetailsPage from './cryptoDetailsPage';
import { fetchCryptocurrencies } from '../utils/api';
import "../../src/App.css";

function HomePage() {

  // State for cryptocurrencies data
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  
  const [selected, setSelected] = useState('');

  // State for search term (for cryptoSearch)
  const [searchTerm, setSearchTerm] = useState('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Function to fetch cryptocurrency data 
  const fetchCryptocurrencyData = async (term, rankOffset) => {
    try {
      const data = await fetchCryptocurrencies(term, rankOffset);
      setCryptocurrencies(data);
      if (data.length) setSelected(data[0].id)
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch cryptocurrency data when the component mounts
    fetchCryptocurrencyData("", 0);
  }, []);

  // Function to handle search
  const handleSearch = (term) => {
  const offset = currentPage===1?0: (currentPage-1)*10;
  setSearchTerm(term);
  fetchCryptocurrencyData(term, offset);

    
  };

  // Function to handle pagination
  const handlePageChange = (page) => {
    const offset = page===1?0: (page-1)*10;
    setCurrentPage(page);
    fetchCryptocurrencyData("", offset);
  };

  return (
    <div className="home-page">
      <h1>Crypto Price Tracker</h1>

      {/* Search input */}
      <CryptoSearch handleSearch={handleSearch} />

      {/* Filter checkboxes */}
      {/* <CryptoFilter filters={filters} setFilters={setFilters} /> */}

      {/* Crypto list */}
      <CryptoList
        cryptocurrencies={cryptocurrencies}
        filters={searchTerm}
        searchTerm={searchTerm}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        selected={selected}
        setSelected={setSelected}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages= {5}
        handlePageChange={handlePageChange}
      />

      {/* Crypto graph */}
      <CryptoGraph id={selected}/>
    </div>
  );
}

export default HomePage;
