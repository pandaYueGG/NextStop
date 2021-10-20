import React from 'react';

const FilterAirlines = () => {

  const airlines = ["Alaska Airlines", "Allegiant Air", "American Airlines", "Delta Air Lines", "Frontier Airlines", "Hawaiian Airlines", "JetBlue",
                    "Southwest Airlines", "Spirit Airlines", "United Airlines"]
  return (
    <div>
      <input type="checkbox" name="Alaska Airlines" /> Alaska Airlines<br/>
      <input type="checkbox" name="Allegiant Air" /> Allegiant Air<br/>
      <input type="checkbox" name="American Airlines" /> American Airlines<br/>
      <input type="checkbox" name="Delta Air Lines" /> Delta Air Lines<br/>
    </div>
  );
};

export default FilterAirlines;