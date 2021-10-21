import React, { useState } from 'react';
import FilterAirlines from './FilterAirlines';
import FilterBags from './FilterBags';
import FilterStop from './FilterStop';

const Filters = () => {
  const [filterStop, setFilterStop] = useState([]);

  return (
    <div className="flex-col text-left mx-2 my-4">
      <div>
        <h3 className="font-bold mt-2">Stops</h3>
        <FilterStop />
      </div>
      <div>
        <h3 className="font-bold mt-2">Airlines</h3>
        <FilterAirlines />
      </div>
      <div>
        <h3 className="font-bold mt-2">Travel & Baggage</h3>
        <FilterBags />
      </div>
    </div>
  );
};

export default Filters;