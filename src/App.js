import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage'; 
import CryptoDetailsPage from './pages/cryptoDetailsPage'; 


function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route path="/crypto-details/:id" component={CryptoDetailsPage} /> 
        </Switch>

      </div>
    </Router>
  );
}

export default App;


