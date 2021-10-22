import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const FlightItem = ( {flight, addFlight} ) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (flight) => {
    setIsSelected(isSelected => !isSelected);
    if (isSelected) {
      addFlight(null);
    } else {
      addFlight(flight);
    }
  }

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
          {isSelected ? <button onClick={() => handleClick()} className="my-4 bg-blue-200 border-2 rounded-full w-20 h-8">Selected</button>
           : <button onClick={() => handleClick(flight)} className="my-4 bg-white border-2 rounded-full w-20 h-8">Select</button>}
        </div>
      </div>
    </div>
  );
};

export default FlightItem;