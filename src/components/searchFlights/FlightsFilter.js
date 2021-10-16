import React, { useState } from 'react';
import FilterStops from './FilterStops';

function FlightsFilter() {
  const [filterStop, setFilterStop] = useState([]);
  const [showStopFilter, setShowStopFilter] = useState(false);
  return (
    <div>
      <div className="all-filters">
        <div className="stops-filter">
          <button onClick={setShowStopFilter(!showStopFilter)}>Stop</button>
          {showStopFilter ? <FilterStops /> : null}
        </div>
      </div>
    </div>
  );
};

export default FlightsFilter;