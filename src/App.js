import React from 'react';
import './App.css';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <div className="border-2 border-black border-dashed bg-blue-500">
        <h1>Hellooooo World</h1>
      </div>
    </div>
  );
}

export default App;
