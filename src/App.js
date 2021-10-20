import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header.js';
import Homepage from './components/Homepage/homepage.js';
import Registration from './components/Registration/registration.js';
import EventsCheckout from './components/EventsCheckout/EventsCheckout';
import Hotels from './components/Hotels.js';


function App() {
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
