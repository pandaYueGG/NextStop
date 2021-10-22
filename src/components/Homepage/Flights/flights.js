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
  const origin = 'SFO';

  const getModalInfoFlights = (filterFlightQuery, flightIconName) => {
    // console.log(filterFlightQuery, flightIconName) => MIA, miami
    console.log(filterFlightQuery, flightIconName)
    axios.get(`http://localhost:3001/api/flights?origin=${origin}&destination=${filterFlightQuery}`)
      .then((res) => {
        console.log(res.data);
        setFlightModalInfo([res.data]);
        setFlightModalIcon(flightIconName);
      })
  };

  return (
    <>
      {showFlightModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/* FLIGHT CONTENT */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none overflow-auto h-96 w-3/4 mx-auto">
                {/* FLIGHT HEADER */}
                <div className="flex items-start justify-between p-5 border-b
                border-solid border-blueGray-200 rounded-t w-full">
                  <h3 className="text-3xl font-semibold leading-relaxed">
                    Pick your Flight
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
                <div className="relative p-0 flex-auto">
                  {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    list of flights
                  </p> */}

                  {/* FLIGHT GRID CONTAINER */}
                  <div
                    style={{display:'flex', alignItems:'center', justifyContent: 'center'}}
                  >
                    {/* {console.log(eventModalInfo)} */}
                    {flightModalInfo.map((flightInfo) => (
                      <div className="rounded overflow-hidden h-72 w-auto" key={1}
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                      >
                        {/* FLIGHT IMAGE */}
                        <img className="w-48 h-3/5 mb-5 shadow-inner cursor-pointer"
                          src={flightModalIcon}
                          alt="cabin"
                          onClick={() => { }}>
                        </img>
                        {/* {console.log(flightInfo)} */}
                        {/* FLIGHT INFORMATION */}
                        <div className="px-1 py-1 flex-col w-auto border px-3" key={1}>
                          <div style={{display: 'flex', flexDirection: 'horizontal'}}>
                            <p className="font-bold text-lg mb-0 text-left text-gray-500 inline">{flightInfo.origin}</p>
                            <p className={'inline px-3'} style={{ fontWeight: 'bold'}}>{`-->`}</p>
                            <p className="font-bold text-lg mb-0 text-left inline"> {flightInfo.destination}</p>
                          </div>
                          <div style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'space-between', marginTop: 7}}>
                            <p className="font-bold text-m mb-0 text-left">{flightInfo.flight[0].departure.slice(0,10)}</p>
                            {/* <h3 className="font-bold text-xs mb-0 float-left items-end">{flightInfo.time.slice(0, -3)}PST, {flightInfo.date}</h3> */}
                            <p className="font-bold text-m mb-0 float-right items-end">{flightInfo.flight[0].airline}</p>
                            <p className="font-bold text-green-500 text-m mb-0 float-right items-end">${flightInfo.flight[0].price}</p>
                          </div>
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
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={MI} alt="MI" onClick={() => { getModalInfoFlights('MIA', miami); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">MIAMI</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={NY} alt="NY" onClick={() => { getModalInfoFlights('JFK', nyc); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">NEW YORK CITY</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-2/3 rounded-lg shadow-inner cursor-pointer" src={LV} alt="LV" onClick={() => { getModalInfoFlights('LAS', lasvegas); setShowFlightModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">LAS VEGAS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights;
