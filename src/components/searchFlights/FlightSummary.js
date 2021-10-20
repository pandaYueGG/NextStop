import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


const FlightSummary = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [value, onChange] = useState(new Date());
  const [cardName, setCardName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState(null);
  const [billCountry, setBillCountry] = useState('');
  const [billAddressOne, setBillAddressOne] = useState('');
  const [billAddressTwo, setBillAddressTwo] = useState('');
  const [billCity, setBillCity] = useState('');
  const [cardState, setCardState] = useState('');
  const [cardZip, setCardZip] = useState('');

  return (
    <div>
      <h2 className="text-xl font-bold text-left ml-20 my-8">Secure your booking</h2>
      <div className="payment w-1/2 float-right mx-20 border-2 rounded-lg grid grid-rows-18 grid-cols-5">
        <h2 className="text-xl font-bold ml-4 mt-4 row-start-1 col-start-1 col-span-2 text-left">How would you like to pay?</h2>
        <img className="ml-4 mt-4 row-start-2 col-span-1 inline-block flex-row" src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="MasterCard" />
        <img className="ml-0 mt-4 row-start-2 col-span-1 inline-block flex-row" src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="AmericanExpress" />
        <img className="ml-0 mt-4 row-start-2 col-span-1 inline-block flex-row" src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="Discover"/>
        <img className="ml-0 mt-4 row-start-2 col-span-1 inline-block flex-row" src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="Visa"/>
        <label className="text-xs ml-4 mt-4 row-start-3 col-start-1 col-span-3 text-left">Name on Card*</label>
        <input className="text-xs ml-4 mt-2 row-start-4 col-start-1 col-span-3 text-left w-72 h-8"
          onChange={(e) => setCardName(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-name" required />
        <label className="text-xs ml-4 mt-4 row-start-5 col-start-1 text-left">Expiration Data*</label>
        <input className="text-xs ml-4 mt-2 row-start-6 col-start-1 text-left w-36 h-8"
          onChange={(e) => setExpiration(e.target.value)} style={{"borderWidth": 2}} type="text" id="expira-date" required />
        <label className="text-xs ml-4 mt-4 row-start-5 col-start-2 text-left">Security Code*</label>
        <input className="text-xs ml-4 mt-2 row-start-6 col-start-2 w-24 h-8"
          onChange={(e) => setSecurityCode(e.target.value)} style={{"borderWidth": 2}} type="text" id="security-code" required />
        <label className="text-xs ml-4 mt-4 row-start-7 col-start-1 col-span-3 text-left">Country/Territory*</label>
        <input className="text-xs ml-4 mt-2 row-start-8 col-start-1 col-span-3 w-36 h-8"
          onChange={(e) => setBillCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-country" required />
        <label className="text-xs ml-4 mt-4 row-start-9 col-start-1 col-span-1 text-left">Billing Address 1*</label>
        <input className="text-xs ml-4 mt-2 row-start-10 col-start-1 col-span-2 w-72 h-8"
          onChange={(e) => setBillAddressOne(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-one" required />
        <label className="text-xs ml-4 mt-4 row-start-9 col-start-3 text-left">Billing Address 2</label>
        <input className="text-xs ml-4 mt-2 row-start-10 col-start-3 w-36 h-8"
          onChange={(e) => setBillAddressTwo(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-two" required />
        <label className="text-xs ml-4 mt-4 row-start-11 col-start-1 text-left">City*</label>
        <input className="text-xs ml-4 mt-2 row-start-12 col-start-1 w-32 h-8"
          onChange={(e) => setBillCity(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-city" required />
        <label className="text-xs ml-4 mt-4 row-start-11 col-start-2 text-left">State*</label>
        <input className="text-xs ml-4 mt-2 row-start-12 col-start-2 w-24 h-8"
          onChange={(e) => setCardState(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-state" required />
        <label className="text-xs ml-4 mt-4 row-start-11 col-start-3 text-left">ZIP Code*</label>
        <input className="text-xs ml-4 mt-2 row-start-12 col-start-3 w-24 h-8"
          onChange={(e) => setCardZip(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-zip"  required />
      </div>
      <div className=" w-1/3 mx-20 my-8 justify-start self-start border-2 rounded-lg" >
        <div className=" grid grid-rows-3 rounded-lg grid-cols-7 m-auto my-4">
          <span className="text-xs ml-4 text-left row-start-1 col-span-4 justify-start">Round trip | passenger number: 1 | Ecomony</span>
          <span className="text-xs row-start-1 col-start-7 justify-end">Total price from</span>
          <span className="text-2xl font-medium row-start-2 row-span-2 col-span-5 text-left ml-4">San Francisco - New York</span>
          <span className="text-2xl font-medium row-start-2 row-span-2 col-start-7 col-span-3 justify-end">$153</span>
        </div>
        <h2 className="text-xl text-left ml-4 my-2 ">Selected Flights</h2>
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
      <div className="w-1/3  mx-20 border-2 rounded-lg grid grid-rows-12 grid-cols-5">
        <h2 className="text-xl font-bold ml-4 mt-4 row-start-1 col-start-1 col-span-2 text-left">Who's travelling?</h2>
        <span className="text-xs text-left ml-4 row-start-2 col-start-1 col-span-4">Traveler names must match government-issued photot ID exactly.</span><br />
        <label className="text-xs text-left ml-4 my-2 row-start-3 col-start-1">First Name*</label>
        <input className="text-xs text-left ml-4 row-start-4 col-start-1 col-span-2 w-48 h-8"
          onChange={(e) => setFirstname(e.target.value)} style={{"borderWidth": 2}} type="text" id="first-name" required
        />
        <label className="text-xs text-left my-2 row-start-3 col-start-3">Middle Name</label>
        <input className="text-xs row-start-4 col-start-3 w-24 h-8"
          onChange={(e) => setMiddlename(e.target.value)} style={{"borderWidth": 2}} type="text" id="middle-name" size="32"
        />
        <label className="text-xs text-left my-2 row-start-3 col-start-4">Last Name*</label>
        <input className="text-xs row-start-4 col-start-4 col-span-2 w-48 h-8"
          onChange={(e) => setLastname(e.target.value)} style={{"borderWidth": 2}} type="text" id="last-name" size="32" required
        />
        <label className="text-xs ml-4 text-left my-2 row-start-5 col-start-1">Country/Territory Code*</label>
        <input className="text-xs ml-4 row-start-6 col-start-1 w-60 h-8"
          onChange={(e) => setCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="country-name" size="32" required
        />
        <label className="text-xs ml-4 text-left my-2 row-start-7 col-start-1">Phone Number*</label>
        <input className="text-xs ml-4 row-start-8 col-start-1 w-60 h-8"
          onChange={(e) => setPhoneNumber(e.target.value)} style={{"borderWidth": 2}} type="text" id="phone-number" size="32" required
        />
        <span className="text-xs ml-4 text-left my-2 row-start-9 col-start-1">Gender*</span>
        <label className="text-xs ml-4 text-left row-start-10 col-start-1">
          <input type="radio" value="Male" name="gender"/> Male
        </label>
        <label className="text-xs text-left row-start-10 col-start-2">
          <input type="radio" value="Female" name="gender" /> Female
        </label>
        <label className="text-xs text-left row-start-10 col-start-3">
          <input type="radio" value="Other" name="gender" /> Other
        </label>
        <label className="text-xs ml-4 mt-2 text-left row-start-11 col-start-1">Date of Brith*</label>
        <div className="birth-date text-xs ml-4 mt-2 mb-12 text-left row-start-12 col-start-1">
          <DatePicker onChange={onChange} value={value}/>
          </div>
      </div>

      <button>Check</button>
    </div>
  );
};

export default FlightSummary;