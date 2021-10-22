import React from 'react';

const FilterBags = () => {
  return (
    <div>
      <input type="checkbox" name="seat-included" /> Seat choice included<br/>
      <input type="checkbox" name="carry-on-bag-included" /> Carry-on bag included<br/>
      <input type="checkbox" name="No-cancel-fee" /> No cancel fee<br/>
      <input type="checkbox" name="No-change-fee" /> No change fee<br/>
    </div>
  );
};

export default FilterBags;