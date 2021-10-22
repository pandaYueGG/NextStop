import React from 'react';
import flightData from './seeds';
import FlightItem from './FlightItem';

const FlightList = ({ addFlight }) => {
  return (
    <div>
      {flightData.map(flight => <FlightItem key={flight.id} addFlight={addFlight} flight={flight}/>) }
    </div>
  );
};

export default FlightList;