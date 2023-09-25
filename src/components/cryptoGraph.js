import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchCryptocurrencyHistory } from '../utils/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CryptoGraph({ id }) {
  
  const [cryptoHistory, setCryptoHistory] = useState({priceUsd: [], date: []});
  const data = {
    labels: cryptoHistory.date,
    datasets: [
      {
        label: 'Price (USD)',
        data: cryptoHistory.priceUsd,
        borderColor: 'rgb(255, 99, 132, 0.5)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  // Function to fetch cryptocurrency data 
  const fetchCryptocurrencyData = async () => {
    
    try {
      const data = await fetchCryptocurrencyHistory(id);
      console.log(data);
      const priceHistory = data.map((item) => item.priceUsd)
      const dateHistory = data.map((item) => item.date)

      setCryptoHistory({priceUsd: priceHistory, date: dateHistory});
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    
    if (id) fetchCryptocurrencyData();
    // Fetch cryptocurrency data when the component mounts
  }, [id]);

  return <Line className="crypto-graph" options={options} data={data} />;
}

export default CryptoGraph;
