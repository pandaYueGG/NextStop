import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


const FlightSummary = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div>
      <div className="flight-info mx-16">
        <div className=" grid grid-rows-3 rounded-lg grid-cols-7 m-auto my-12">
          <span className="text-xs row-start-1 col-span-2 justify-start">Round trip | passenger number: 1 | Ecomony</span>
          <span className="text-xs row-start-1 col-start-7 justify-end">Total price from</span>
          <span className="text-2xl font-medium row-start-2 row-span-2 col-span-2 justify-start">San Francisco - New York</span>
          <span className="text-2xl font-medium row-start-2 row-span-2 col-start-7 col-span-3 justify-end">$153</span>
        </div>
        <h2 className="text-xl justify-start m-auto my-2">Selected Flights</h2>
        <div className="border-2 border-gray-75  grid grid-rows-2 rounded-lg grid-cols-7 m-auto justify-center self-center ">
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
      <div className="payment">
        <h2>Secure your booking</h2>
        <div className="check-modal">
          <h2>Who's travelling?</h2>
          <span>Traveler names must match government-issued photot ID exactly.</span><br />
          <label >First Name</label><label>*</label>
          <input onChange={(e) => setFirstname(e.target.value)} style={{"borderWidth": 2}} type="text" id="first-name" size="32" required />
          <label>Middle Name</label>
          <input onChange={(e) => setMiddlename(e.target.value)} style={{"borderWidth": 2}} type="text" id="middle-name" size="32" />
          <label>Last Name</label>
          <input onChange={(e) => setLastname(e.target.value)} style={{"borderWidth": 2}} type="text" id="last-name" size="32" required />
          <label>Country/Territory Code</label><span>*</span><br />
          <input onChange={(e) => setCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="country-name" size="32" required />
          <label>Phone Number</label><span>*</span><br />
          <input onChange={(e) => setPhoneNumber(e.target.value)} style={{"borderWidth": 2}} type="text" id="phone-number" size="32" required />
          <div>
            <span>Gender</span><span>*</span>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          {/* <div className="birth-date">
            <DatePicker onChange={onChange} value={value}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FlightSummary;