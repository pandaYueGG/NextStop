import React from 'react';
import Flights from '../Homepage/Flights/flights.js';
import Hotels from '../Homepage/Hotels/Hotels.js';
import Events from '../Homepage/Events/events.js';

function homepage() {
    return (
        <>
            <div><Flights /></div>
            <div><Hotels /></div>
            <div><Events /></div>
        </>
    )
}

export default homepage;
