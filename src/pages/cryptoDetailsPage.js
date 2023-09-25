import React from 'react';
import { Link } from 'react-router-dom';

function CryptoDetailsPage() {
  return (
    <div className="crypto-details-page">
      <h2>Cryptocurrency Details</h2>
      <p>Select a cryptocurrency to view details.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default CryptoDetailsPage;
