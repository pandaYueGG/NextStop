import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';
import SearchFlightWidget from './components/searchFlights/SearchFlightWidget';
import Registration from './components/Registration/registration';

function App() {

  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Homepage />
    //         </Route>
    //         <Route exact path="/registration">
    //           <Registration />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    <div className="w-3/4">
      <SearchFlightWidget />
    </div>

  );
}

export default App;
