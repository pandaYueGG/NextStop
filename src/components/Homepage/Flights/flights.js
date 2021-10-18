import React, { useState } from 'react';
import axios from 'axios';
import SF from './SF.jpeg';
import NY from './NY.jpeg';
import LV from './LV.jpeg';
// import FlightsModal from './FlightsModal.js';

function Flights() {
  // const [flightInfo, setFlightInfo] = useState('');

  // const getModalInfoFlights = () => {
    // sf, ny, lv
    // on image click sf / ny / lv, get flight info
    // axios.get(`all flights to san francisco`)
  // };

  return (
    <>
      <div className="py-10 px-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-60 rounded-lg" src={SF} alt="SF"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">SAN FRANCISCO</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-60 rounded-lg" src={NY} alt="NY"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">NEW YORK CITY</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-60 rounded-lg" src={LV} alt="LV"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">LAS VEGAS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights;
