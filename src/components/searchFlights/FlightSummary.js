import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FlightSummary = () => {

  return (
    <div>
      <div className="w-1/2  grid grid-rows-3 rounded-lg grid-cols-7 m-auto my-12">
        <span className="text-xs row-start-1 col-span-2 justify-start">Round trip | passenger number: 1 | Ecomony</span>
        <span className="text-xs row-start-1 col-start-7 justify-end">Total price from</span>
        <span className="text-2xl font-medium row-start-2 row-span-2 col-span-2 justify-start">San Francisco - New York</span>
        <span className="text-2xl font-medium row-start-2 row-span-2 col-start-7 col-span-3 justify-end">$153</span>
      </div>
      <h2 className="text-xl w-1/2 justify-start m-auto my-2">Selected Flights</h2>
      <div className="border-2 border-gray-75 w-1/2  grid grid-rows-2 rounded-lg grid-cols-7 m-auto justify-center self-center ">
          <img className="row-start-1 row-span-2 h-20" src="https://i.pinimg.com/736x/75/b4/69/75b469395dcf237d3a2a5482100e8117--triangle-logo-arrow-logo.jpg"/>
          <span className=" row-start-1 col-star-2 ">10:50AM - 9:00AM</span>
          <span className=" row-start-2 col-star-2 ">American . Alaska</span>
          <span className="row-start-1 col-start-4">10hr 27min</span>
          <span className="row-start-2 col-start-4">LGA-SJC</span>
          <span className="row-start-1 col-start-5">2 stop</span>
          <span className="row-start-2 col-start-5">DTW, SEA</span>
          <span className="row-start-1 col-start-7">$206</span>
          <span className="row-start-2 col-start-7">round trip</span>
      </div>
    </div>
  );
};

export default FlightSummary;