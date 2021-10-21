import React from 'react';

const FlightItem = ( {flight, addFlight} ) => {

  return (
    <div>
      <div className="my-4 mx-4 bg-gray-100 rounded-lg justify-center shadow-lg flex justify-center self-center">
        <img className="airline-name h-16 m-2" src={flight.thumbnail}/>
        <div className="time-airline m-4">
          <span>{flight.departure} - {flight.arrive}</span><br />
          <span>{flight.airline}</span>
        </div>
        <div className="duration-airport mx-2 my-4">
          <span>{flight.duration}</span><br />
          <span>{flight.airports}</span>
        </div>
        <div className="stops mx-4 my-4">
          <span>{flight.stopNumber} stop</span><br />
          <span>{flight.stopsAirports}</span>
        </div>
        <div className="price m-4">
          <span>${flight.price}</span><br />
          <span>{flight.type}</span>
        </div>
        <div className="btn m-4">
          <button onClick={() => addFlight(flight)} className="my-4 bg-blue-200 rounded-full w-16 h-8">Select</button>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;