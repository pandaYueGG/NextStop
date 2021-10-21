import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import { useHistory} from 'react-router-dom';



const PassengerInfo = styled.div`
  background-color: #EDEDED;
  width: 35vw;
  border-width: 0.5px;
  border-color: #FEF5ED;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  margin-top: 4vh;
  margin-left: 10vw;
  margin-right: 6vw;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CardInfo = styled.div`
  background-color: #F3F1F5;
  width: 30vw;
  height: 60vh;
  border-width: 0.5px;
  border-color: #FEF5ED;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  margin-top: 4vh;
  margin-right: 15vw;
  margin-bottom: 2vw;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Button = styled.button`
  position: absolute;
  right: 42%;
  bottom: 10%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 360px;
  height: 36px;
  font-size: 16px;
  background-color: #EDEDED;
  border-radius: 8px;
  margin-bottom: 15px;
`;



const Payment = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [value, onChange] = useState(new Date());
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState(null)
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState(null);
  const [billCountry, setBillCountry] = useState('');
  const [billAddressOne, setBillAddressOne] = useState('');
  const [billAddressTwo, setBillAddressTwo] = useState('');
  const [billCity, setBillCity] = useState('');
  const [cardState, setCardState] = useState('');
  const [cardZip, setCardZip] = useState('');

  let history = useHistory();

  return (
    <div>
      <h2 className="text-xl font-bold text-left ml-20 my-8">Final Step - Secure your booking :)</h2>
      <PassengerInfo>
        <h2 className="text-xl font-bold mt-4 text-left">Who's travelling?</h2>
        <span className="warning text-xs">Traveler names must match government-issued photot ID exactly.</span><br />
        <div className="name inline-flex text-left my-2">
          <div className="flex-col">
            <label>First Name*</label><br />
            <input className="w-40" onChange={(e) => setFirstname(e.target.value)} style={{"borderWidth": 2}} type="text" id="first-name" required/>
          </div>
          <div className="flex-col mx-2">
            <label>Middle Name</label><br />
            <input className="w-28" onChange={(e) => setMiddlename(e.target.value)} style={{"borderWidth": 2}} type="text" id="middle-name"/>
          </div>
          <div className="flex-col mx-2">
            <label>Last Name*</label><br />
            <input className="w-28" className="w-40" onChange={(e) => setLastname(e.target.value)} style={{"borderWidth": 2}} type="text" id="last-name" required/>
          </div>
        </div>
        {/* country */}
        <div className="country flex flex-col text-left my-2">
          <label>Country/Territory*</label>
          <input className="w-80" onChange={(e) => setCountry(e.target.value)} style={{"borderWidth": 2}} type="text" id="country-name" required/>
        </div>
        {/* phone number */}
        <div className="phone flex flex-col text-left my-2">
          <label>Phone Number*</label>
          <input className="w-56" onChange={(e) => setPhoneNumber(e.target.value)} style={{"borderWidth": 2}} type="text" id="phone-number"  required/>
        </div>
        {/* gender */}
        <div className="gender text-left my-2">
          <span>Gender*</span><br />
          <div></div>
          <input type="radio" value="Male" name="gender"/> <span className="ml-2 mr-4">Male</span>
          <input type="radio" value="Female" name="gender" /><span className="ml-2 mr-4"> Female</span>
          <input type="radio" value="Other" name="gender" /><span className="ml-2 mr-4"> Other </span>
        </div>
        <label>Date of Brith*</label>
        {/* birthday */}
        <div className="birth-date my-2">
          <DatePicker onChange={onChange} value={value}/>
        </div>
      </PassengerInfo>
      <CardInfo className="payment">
        <h2 className="text-xl font-bold mt-4 text-left">How would you like to pay?</h2>
        <div className="inline-flex my-2">
          <img  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="MasterCard" />
          <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="AmericanExpress" />
          <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="Discover"/>
          <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="Visa"/>
        </div>
        <div className="flex flex-col my-2 text-left">
          <label>Name on Card*</label>
          <input className="w-40" onChange={(e) => setCardName(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-name" required />
        </div>
        <div className="flex flex-col my-2 text-left">
          <label>Card Number*</label>
          <input className="w-60" onChange={(e) => setCardNumber(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-name" required />
        </div>
        <div className="flex flex-row my-2 text-left">
          <div className="flex flex-col text-left mr-4">
            <label>Expiration Data*</label>
            <input className="w-40" onChange={(e) => setExpiration(e.target.value)} style={{"borderWidth": 2}} type="text" id="expira-date" required />
          </div>
          <div className="flex flex-col text-left">
            <label>Security Code*</label>
            <input onChange={(e) => setSecurityCode(e.target.value)} style={{"borderWidth": 2}} type="text" id="security-code" required />
          </div>
        </div>
        <label>Billing Address 1*</label>
        <input className="w-60" onChange={(e) => setBillAddressOne(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-one" required />
        <label>Billing Address 2</label>
        <input className="w-60" onChange={(e) => setBillAddressTwo(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-address-two"/>
        <div className="flex flex-row my-2 text-left">
          <div className="flex flex-col text-left mr-4">
            <label>City*</label>
            <input className="w-40" onChange={(e) => setBillCity(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-city" required />
          </div>
          <div className="flex flex-col text-left mr-4">
            <label>State*</label>
            <input className="w-40" onChange={(e) => setCardState(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-state" required />
          </div>
          <div className="flex flex-col text-left mr-4">
            <label>ZIP Code*</label>
            <input className="w-40" onChange={(e) => setCardZip(e.target.value)} style={{"borderWidth": 2}} type="text" id="card-zip"  required />
          </div>
        </div>
      </CardInfo>
      <Button onClick={() => {history.push("/paymentFinish")}} className="pay-btn">Pay</Button>
    </div>
  );
};

export default Payment;