import React from 'react';
import Flights from '../Homepage/Flights/flights.js';
import Hotels from '../Homepage/Hotels/Hotels.js';
import Events from '../Homepage/Events/events.js';
import Search from '../Homepage/Search/search.js';

function homepage() {
  return (
    <>
    <Search />
    <Flights />
    <Hotels />
    <Events />
    </>
  )
}

export default homepage;