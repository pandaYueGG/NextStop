import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

const PassengerInfo = styled.div`
  background-color: #EDEDED;
  width: 45vw;
  border-width: 0.5px;
  border-color: #FEF5ED;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  margin-left: 5vw;
  margin-right: 15vw;
  float: right;
  display: inline-flex;
`;

const CardInfo = styled.div`
  background-color: #F3F1F5;
  width: 45vw;
  height: 20vh;
  border-width: 0.5px;
  border-color: #FEF5ED;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  margin-top: 4vh;
  margin-left: 5vw;
  margin-right: 15vw;
  margin-bottom: 2vw;
  float: right;
  display: inline-flex;
  align-item: start;
`;

const Payment = () => {
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
      <h2 className="text-xl font-bold text-left ml-20 my-8">Final Step - Secure your booking :)</h2>
      <CardInfo className="payment">
        <h2 className="text-xl">How would you like to pay?</h2>
        <img  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="MasterCard" />
        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="AmericanExpress" />
        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="Discover"/>
        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="Visa"/>
        <label>Name on Card*</label>
        <input nChange={(e) => setCardName(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-name" required />
        <label>Expiration Data*</label>
        <input onChange={(e) => setExpiration(e.target.value)} style={{"borderWidth": 2}} type="text" id="expira-date" required />
        <label>Security Code*</label>
        <input onChange={(e) => setSecurityCode(e.target.value)} style={{"borderWidth": 2}} type="text" id="security-code" required />
        <label>Country/Territory*</label>
        <input onChange={(e) => setBillCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-country" required />
        <label>Billing Address 1*</label>
        <input onChange={(e) => setBillAddressOne(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-one" required />
        <label>Billing Address 2</label>
        <input onChange={(e) => setBillAddressTwo(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-two"/>
        <label>City*</label>
        <input onChange={(e) => setBillCity(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-city" required />
        <label>State*</label>
        <input onChange={(e) => setCardState(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-state" required />
        <label>ZIP Code*</label>
        <input onChange={(e) => setCardZip(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-zip"  required />
      </CardInfo>
      <PassengerInfo>
        <h2 className="text-xl font-bold ml-4 mt-4 row-start-1 col-start-1 col-span-2 text-left">Who's travelling?</h2>
        <span>Traveler names must match government-issued photot ID exactly.</span><br />
        <label>First Name*</label>
        <input onChange={(e) => setFirstname(e.target.value)} style={{"borderWidth": 2}} type="text" id="first-name" required/>
        <label>Middle Name</label>
        <input onChange={(e) => setMiddlename(e.target.value)} style={{"borderWidth": 2}} type="text" id="middle-name"/>
        <label>Last Name*</label>
        <input onChange={(e) => setLastname(e.target.value)} style={{"borderWidth": 2}} type="text" id="last-name" required/>
        <label>Country/Territory Code*</label>
        <input onChange={(e) => setCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="country-name" required/>
        <label>Phone Number*</label>
        <input onChange={(e) => setPhoneNumber(e.target.value)} style={{"borderWidth": 2}} type="text" id="phone-number"  required/>
        <span>Gender*</span>
        <label className="text-xs ml-4 text-left row-start-10 col-start-1">
          <input type="radio" value="Male" name="gender"/> Male
        </label>
        <label className="text-xs text-left row-start-10 col-start-2">
          <input type="radio" value="Female" name="gender" /> Female
        </label>
        <label className="text-xs text-left row-start-10 col-start-3">
          <input type="radio" value="Other" name="gender" /> Other
        </label>
        <label>Date of Brith*</label>
        <div className="birth-date">
          <DatePicker onChange={onChange} value={value}/>
          </div>
      </PassengerInfo>
      <button className="w-24 text-white bg-black border-2 rounded-lg">Check</button>
    </div>
  );
};

export default Payment;