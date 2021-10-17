import React, { useState } from 'react';
import FilterAirlines from './FilterAirlines';
import FilterStop from './FilterStop';

const Filters = () => {
  const [filterStop, setFilterStop] = useState([]);


  return (
    <div className="all-filters">
      <h2>Filter by</h2>
      <div>
        <h3>Stops</h3>
        <FilterStop />
      </div>
      <div>
        <h3>Airlines</h3>
        <FilterAirlines />
      </div>
    </div>
  );
};

export default Filters;