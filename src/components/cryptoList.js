import React from "react";

const CryptoList = ({ cryptocurrencies, selected, setSelected}) => {
  //event variable
function handleFilterChange(e){
  setSelected(e.target.value);
}

  return (
    <div className="crypto-list">
      {/* Heading */}
      <h2>Top 50 Crypto Crypto Currencies</h2>

      {/* Table to display crypto currencies */}
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24-Hour Change</th>
            <th>Filter</th>
          </tr>
        </thead>

        <tbody>
          {cryptocurrencies.map((crypto, i) => (
            <tr key={crypto.id}>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.priceUsd}</td>
              <td>{crypto.changePercent24Hr}%</td>
              <td>
              <input
          type="radio" 
          value = {crypto.id}
          name = "crypto_filter"
          checked = {selected===crypto.id? true: false}
          onChange={handleFilterChange}
        />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;