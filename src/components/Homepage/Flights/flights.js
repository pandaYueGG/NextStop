import React, { useState } from 'react';
import axios from 'axios';
import MI from './MI.jpeg';
import NY from './NY.jpeg';
import LV from './LV.jpeg';
import miami from './miami.png';
import lasvegas from './lasvegas.png';
import nyc from './nyc.png';

function Flights() {
  const [showFlightModal, setShowFlightModal] = useState(false);
  const [flightModalInfo, setFlightModalInfo] = useState([]);
  const [flightModalIcon, setFlightModalIcon] = useState();


  const getModalInfoFlights = (filterFlightQuery, flightIconName) => {
    // console.log(filterFlightQuery, flightIconName) => MIA, miami
    axios.get('http://localhost:3001/api/flights', { params: { destination: filterFlightQuery } })
      .then((res) => {
        setFlightModalInfo(res.data.flights);
        setFlightModalIcon(flightIconName);
        console.log(flightModalInfo, flightModalIcon);
      })
  };

  return (
    <>
      {showFlightModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* FLIGHT CONTENT */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col
              w-full bg-white outline-none focus:outline-none overflow-auto h-96">
                {/* FLIGHT HEADER */}
                <div className="flex items-start justify-between p-5 border-b
                border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold leading-relaxed">
                    Pick your activity
                  </h3>
                  {/* FLIGHT MODAL EXIT BUTTON */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20
                    float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowFlightModal(false)}>
                    <span>
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    list of flights
                  </p> */}
                  
                  {/* FLIGHT GRID CONTAINER */}
                  <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
                                  lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
                    {/* {console.log(eventModalInfo)} */}
                    {flightModalInfo.map((flightInfo) => (
                      <div className="rounded overflow-hidden h-72" key={flightInfo.id}>
                        {/* {console.log(flightInfo)} */}
                        {/* FLIGHT IMAGE */}
                        <img className="w-full h-3/5 rounded-lg shadow-inner cursor-pointer"
                          src={flightModalIcon.slice(1).slice(0, -1)}
                          alt="cabin"
                          onClick={() => { }}>
                        </img>
                        {/* FLIGHT INFORMATION */}
                        <div className="px-1 py-1 flex-col" key={flightInfo.id}>
                          <h3 className="font-bold text-xs mb-0 text-left text-gray-500">hello</h3>
                          <h3 className="font-bold text-xs mb-0 text-left">{flightInfo.name}</h3>
                          <h3 className="font-bold text-xs mb-0 float-left items-end">{flightInfo.time.slice(0, -3)}PST, {flightInfo.date}</h3>
                          <h3 className="font-bold text-xs mb-0 float-right items-end">${flightInfo.priceMin}</h3>
                        </div>
                      </div>
                    ))}
                  </div>


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
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={MI} alt="MI" onClick={() => { getModalInfoFlights('MIA', 'miami'); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">MIAMI</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={NY} alt="NY" onClick={() => { getModalInfoFlights('JFK', 'nyc'); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">NEW YORK CITY</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={LV} alt="LV" onClick={() => { getModalInfoFlights('LAS', 'lasvegas'); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">LAS VEGAS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights;
