// Defining the base URL for the CoinCap API
const API_BASE_URL = 'https://api.coincap.io/v2';

// Function to fetch cryptocurrencies with optional skip, limit, and search parameters
export async function fetchCryptocurrencies(searchValue, offset) {
  try {
    // Construct the URL with query parameters
    const url = `${API_BASE_URL}/assets?limit=10&search=${searchValue}&offset=${offset}`;

    // Making an HTTP GET request to the API's endpoint
    const response = await fetch(url);

    // Checking if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Returns the list of cryptocurrencies based on the search
    return data.data;
  } catch (error) {
    // If there's an error at any step, throws an error with a descriptive message
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

fetchCryptocurrencyHistory ()

// Function to fetch cryptocurrency details by ID
export async function fetchCryptocurrencyById(id) {
  try {
    // Makes an HTTP GET request to the API's endpoint for a specific cryptocurrency
    const response = await fetch(`${API_BASE_URL}/assets/${id}`);
    
    // Checks if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrency data');
    }

    // Parse the response body as JSON
    const data = await response.json();
    
    // Returns the details of the cryptocurrency
    return data.data;
  } catch (error) {
    // If there's an error at any step, throws an error with a descriptive message
    throw new Error(`Error fetching cryptocurrency data: ${error.message}`);
  }
}

export async function fetchCryptocurrencyHistory(id) {
  const currentTime = new Date();
  const endTime = new Date(); 
  endTime.setDate(endTime.getDate());
  currentTime.setDate(currentTime.getDate()-7);

  console.log(currentTime, endTime);
  try {
    // Makes an HTTP GET request to the API's endpoint for a specific cryptocurrency
    const response = await fetch(`${API_BASE_URL}/assets/${id}/history?interval=d1&start=${currentTime.getTime()}&end=${endTime.getTime()}`);
    // const response = await fetch(`${API_BASE_URL}/assets/${id}/history?interval=d1`);
    // Checks if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrency data');
    }

    // Parse the response body as JSON
    const data = await response.json();
    
    // Returns the details of the cryptocurrency
    return data.data;
  } catch (error) {
    // If there's an error at any step, throws an error with a descriptive message
    throw new Error(`Error fetching cryptocurrency history: ${error.message}`);
  }
}