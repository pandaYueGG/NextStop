import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';
import Registration from './components/Registration/registration.js';
import HotelPage from './components/Homepage/Hotels/HotelPage.js';
import EventsCheckout from './components/EventsCheckout/EventsCheckout';
import Hotels from './components/Hotels.js';
import SearchFlightWidget from './components/searchFlights/SearchFlightWidget';
import Profile from './components/Profile/profile.js';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoutes.js';
import {LoginContext} from './Context.js';
import FlightSummary from './components/searchFlights/FlightSummary'


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <LoginContext.Provider value={{isAuth, setIsAuth}}>
          <Header isAuth={isAuth}/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/registration">
                <Registration />
              </Route>
              <ProtectedRoute exact path="/profile" component={Profile} isAuth={isAuth} />
              <Route exact path="/events">
                <EventsCheckout />
              </Route>
              <Route exact path="/hotels">
                <Hotels />
              </Route>
              <Route exact path="/searchFlight">
                <SearchFlightWidget />
              </Route>
              <Route exact path="/checkout">
                <FlightSummary />
              </Route>
            </Switch>
          </div>
        </LoginContext.Provider>
      </div>

    </Router>
  );
}

export default App;
