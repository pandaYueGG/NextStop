import React, { useState } from 'react';
import FilterAirlines from './FilterAirlines';
import FilterBags from './FilterBags';
import FilterStop from './FilterStop';
import FlightList from './FlightList';

const Filters = () => {
  const [filterStop, setFilterStop] = useState([]);

  return (
    <div className="flex flex-col justify-end self-start">
      <h2 className="font-bold">Filter by</h2>
      <div>
        <h3>Stops</h3>
        <FilterStop />
      </div>
      <div>
        <h3 className="font-bold">Airlines</h3>
        <FilterAirlines />
      </div>
      <div>
        <h3 className="font-bold">Travel & Baggage</h3>
        <FilterBags />
      </div>
    </div>
  );
};

export default Filters;