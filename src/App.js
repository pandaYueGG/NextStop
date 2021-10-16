import React from 'react';
import './App.css';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';
import SearchFlightWidget from './components/searchFlights/SearchFlightWidget.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      this is our app
      <SearchFlightWidget />
    </div>
  );
}

export default App;
