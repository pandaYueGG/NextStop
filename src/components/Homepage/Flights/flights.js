import React, { useState } from 'react';
import axios from 'axios';
import SF from './SF.jpeg';
import NY from './NY.jpeg';
import LV from './LV.jpeg';
import FlightsModal from './FlightsModal.js';

function Flights() {
  // const [flightInfo, getFlightInfo] = useState('');
  const [showFlightModal, setShowFlightModal] = React.useState(false);

  const getModalInfoFlights = () => {
  // sf, ny, lv
  // on image click sf / ny / lv, get flight info
  // axios.get(`all flights to san francisco`)
  };

  return (
    <>
      {showFlightModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Flights to San Francisco
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={handleClose}
                    onClick={() => setShowFlightModal(false)}
                  >
                    <span>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    list of flights
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <h3 className="text-left text-3xl font-bold px-28">Popular Destinations</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={SF} alt="SF" onClick={() => setShowFlightModal(true)}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">SAN FRANCISCO</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={NY} alt="NY" onClick={() => setShowFlightModal(true)}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">NEW YORK CITY</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={LV} alt="LV" onClick={() => setShowFlightModal(true)}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">LAS VEGAS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights;
