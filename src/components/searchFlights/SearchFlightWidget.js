import React, { useState } from 'react';
import Filters from './Filters';
import FlightList from './FlightList';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';

const Button = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  width: 240px;
  height: 36px;
  font-size: 16px;
  background-color: #EDEDED;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  &:hover {
    transition: 0.5s;
    background-color: #D7E9F7;
    transform: translateY(-5px);
   }
`;

const SearchFlightWidget = ( {addFlight} ) => {

  let history = useHistory();

  return (
    <div className="filters inline-flex flex-row items-start">
      <div className="filters my-8">
        <div className="filters float-left rounded-xl  p-1 bg-blue-100 shadow-xl mx-4 my-16">
          <span className="font-bold">Filter By:</span>
          <Filters />
        </div>
        <div className="flight-list float-right rounded-xl p-1 mx-4 text-left ">
          <span className="text-2xl font-bold mt-2 ml-4 text-left">Flight List</span>
          <FlightList  addFlight={addFlight} />
        </div>
      </div>
      <div className="flex-col float-right mr-12 ml-8 my-24">
        <Button onClick={() => {history.push("/hotels")}} className="explore-stay-btn">Find Nice Stays</Button>
        <Button onClick={() => {history.push("/events")}} className="explore-event-btn">Explore Events Nearby</Button>
        <Button onClick={() => {history.push("/checkout")}} className="checkout-btn">I Want Checkout</Button>
      </div>
    </div>
  )

};

export default SearchFlightWidget;