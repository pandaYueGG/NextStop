import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';
import Registration from './components/Registration/registration.js';
import EventsCheckout from './components/EventsCheckout/EventsCheckout';
import Hotels from './components/Hotels.js';
import SearchFlightWidget from './components/searchFlights/SearchFlightWidget';
import Checkout from './components/Checkout';
import Payment from './components/Payment';


function App() {

  const [selectedFlight, setSelectedFlight] = useState(null);

  const addFlight = (flight) => {
    console.log('this is flight obj: ', flight);
    setSelectedFlight(flight)
  }



  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/events">
              <EventsCheckout />
            </Route>
            <Route exact path="/hotels">
              <Hotels />
            </Route>
            <Route exact path="/searchFlight">
              <SearchFlightWidget addFlight={addFlight}/>
            </Route>
            <Route exact path="/checkout">
              <Checkout flight={selectedFlight}/>
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
