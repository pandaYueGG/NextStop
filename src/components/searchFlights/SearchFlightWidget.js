import React, { useState } from 'react';
import Filters from './Filters';
import FlightList from './FlightList';
import FlightSummary from './FlightSummary';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';

const Button = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  width: 360px;
  height: 36px;
  font-size: 16px;
  background-color: #EDEDED;
  border-radius: 8px;
  margin-bottom: 15px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #0381ff33;
    transform-origin: bottom;
    transform: scale(0);
    overflow-x: hidden;
    transition: transform .4s .4s, width .2s cubic-bezier(.7,.06,.19,1.01);
  }

  &:hover::before {
    width: 100%;
    transform: scale(1);;
  }
`;

const SearchFlightWidget = ( {addFlight} ) => {
  const [showList, setShowList] = useState(true)
  let history = useHistory();


  if (showList) {
    return (
      <div className="filters items-start">
        <div className="filters inline-block my-8">
          <div className="filters float-left rounded-xl  p-1 bg-blue-200 shadow-xl mx-4">
            <span className="font-bold">Filter By:</span>
            <Filters />
          </div>
          <div className="flight-list float-right border-2 rounded-xl p-1 mx-4">
            <span className="font-bold">Flight List</span>
            <FlightList  addFlight={addFlight} />
          </div>
        </div>
        <Button className="explore-stay-btn">Find A Nice Stays</Button>
        <Button className="explore-event-btn">Explore Evens Nearby</Button>
        <Button onClick={() => {history.push("/checkout")}} className="checkout-btn">I Want Checkout</Button>
      </div>
    )
  } else {
    return (
      <div><FlightSummary /></div>
    )
  }

};

export default SearchFlightWidget;