import React from 'react';

const FilterStop = () => {
  return (
    <div className="check-stop">
      <input type="checkbox" name="All results" /> All results<br/>
      <input type="checkbox" name="non-stop" /> Non Stop<br/>
      <input type="checkbox" name="one stop" /> One Stop<br/>
      <input type="checkbox" name="two stop" /> Two Stops<br/>
    </div>
  );
};

export default FilterStop;