import React from 'react';
import Header from '../Header/header.js';
import Flights from '../Homepage/Flights/flights.js';
import Hotels from '../Homepage/Hotels/Hotels.js';
import Events from '../Homepage/Events/events.js';

function homepage() {
  return (
    <>
    <Header/>
    <Flights />
    <Hotels />
    <Events />
    </>
  )
}

export default homepage;