import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import FlightList from './FlightList';
import FlightSummary from './FlightSummary';

const SearchFlightWidget = () => {
  const [showList, setShowList] = useState(true)
  const handleSelectClick = (e) => {
    setShowList(false)
  }

  if (showList) {
    return (
      <div>
        <div className="w-1/4 float-left justify-end">
          <Filters />
        </div>
        <div className="w-3/4 float-right justify-start">
          <FlightList handleSelectClick={handleSelectClick} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-1/2"><FlightSummary /></div>
    )
  }
};

export default SearchFlightWidget;