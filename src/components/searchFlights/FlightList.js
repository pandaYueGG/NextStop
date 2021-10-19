import React from 'react';

const FlightList = ({ handleSelectClick }) => {
  console.log(handleSelectClick);
  return (
    <div>
      <div>
        <h2>Flight List</h2>
        <div className="border-2 border-gray-75 my-1 grid grid-rows-2 rounded-lg grid-cols-12 mx-60 justify-center">
          <img className="row-start-1 row-span-2 h-20" src="https://i.pinimg.com/736x/75/b4/69/75b469395dcf237d3a2a5482100e8117--triangle-logo-arrow-logo.jpg"/>
          <span className=" row-start-1 col-star-3 col-span-3">10:50AM - 9:00AM</span>
          <span className=" row-start-2 col-star-3 col-span-3">American . Alaska</span>
          <span className="row-start-1 col-start-5 col-span-2">10hr 27min</span>
          <span className="row-start-2 col-start-5 col-span-2">LGA-SJC</span>
          <span className="row-start-1 col-start-7">2 stop</span>
          <span className="row-start-2 col-start-7">DTW, SEA</span>
          <span className="row-start-1 col-start-10">$206</span>
          <span className="row-start-2 col-start-10">round trip</span>
          <button className="row-start-1 row-span-2 col-start-12 bg-blue-200 rounded-full w-16 h-8 justify-self-center self-center">Detail</button>
          <button onClick={() => handleSelectClick()} className="row-start-1 row-span-2 col-start-13 bg-blue-200 rounded-full w-16 h-8 justify-self-center self-center">Select</button>
        </div>
      </div>
    </div>
  );
};

export default FlightList;