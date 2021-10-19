import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import FlightList from './FlightList';
import FlightSummary from './FlightSummary';

const SearchFlightWidget = () => {
  const [showList, setShowList] = useState(true)

  return (
    <div>
      {showList
      ? <>
        <div className="w-1/4 float-left justify-end">
          <Filters />
        </div>
        <div className="w-3/4 float-right justify-start">
          <FlightList handleClick={setShowList(false)} />
        </div>
      </>: <><FlightSummary /></>}
    </div>

  );
};

export default SearchFlightWidget;