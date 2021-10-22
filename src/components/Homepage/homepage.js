import React from 'react';
import './homepage.css';

import Flights from '../Homepage/Flights/flights.js';
import Hotels from '../Homepage/Hotels/Hotels.js';
import Events from '../Homepage/Events/events.js';
import Search from '../Homepage/Search/search.js';

import Fade from 'react-reveal/Fade';

function Homepage() {

  return (
    <>
    <div className="parallax" ><Search /></div>
    <Flights />
    <Hotels />
    <Events />
    </>
  )
}

export default Homepage;