import React from 'react';
import { useHistory} from 'react-router-dom';
import styled from 'styled-components';

const FlightModal = styled.div`
 background-color: #D7E9F7;
 width: 20vw;
 height: 45vh;
 border-width: 0.5px;
 border-color: #FEF5ED;
 border-radius: 16px;
 box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
 padding: 24px;
 margin-top: 4vh;
 margin-left: 15vw;
 float: left;
 display: block;
 flex-direction: column;
 text-align: start;
 justify-content: start;
 &:hover {
  transition: 0.5s;
  transform: translateY(-10px);
 }

`;
const HotelModal = styled.div`
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
 &:hover {
  transition: 0.5s;
  transform: translateY(-10px);
 }
`;

const EventModal = styled.div`
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

const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transition: 0.5s;
    transform: translateY(-10px);
   }
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


const Checkout = ({ flight }) => {
  let history = useHistory();
  console.log("flight: ", flight);

  return (
    <div>
      <div className="mt-8">
        <span className="text-2xl font-bold">Trip Summary</span>
      </div>
      <FlightModal className="flight-info">
        <span style={{fontWeight: "bold", fontSize: "24px"}}>Your Flight</span>
        <span style={{fontWeight: "bold", fontSize: "24px", float: "right"}}>${flight.price}</span><br />
        <img className="airline-name w-32 mt-8 mb-4" src={flight.thumbnail}/>
        <span><strong>Airlines: </strong>{flight.airline}</span><hr />
        <span><strong>From: </strong> {flight.local} </span>
        <span><strong> To: </strong> {flight.destination}</span><br />
        <span><strong>Time: </strong>{flight.departure} - {flight.arrive}</span><br />
        <span><strong>Duraton: </strong>{flight.duration}</span><br />
        <span><strong>Airports: </strong>{flight.airports}</span><br />
        <span><strong>Stops: </strong>{flight.stopsAirports}</span><br />
        <span><strong>Trip Type: </strong>{flight.type}</span>
      </FlightModal>
      <HotelModal>
        <img className="w-1/2 rounded-lg shadow-inner" src='https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high'/>
        <span>Fairmont Heritage Place, Ghirardelli Square</span><br />
        <span>streetAddress: 900 N Point Street</span><br />
        <span>San Francisco, 94109</span><br />
        <span>rating: 4.7</span>
      </HotelModal>
      <EventModal>
        <EventItem>
          <img className="w-3/5 rounded-lg shadow-inner cursor-pointer" src='https://s1.ticketm.net/dam/a/2c9/7a648164-4707-4c86-baba-5bad764542c9_954861_RETINA_PORTRAIT_3_2.jpg'/>
          <span>AK: Fate Loves The Fearless Tour</span><br />
          <span>2021-10-17</span><br />
        </EventItem>
        <EventItem>
          <img className="w-3/5 rounded-lg shadow-inner cursor-pointer" src='https://s1.ticketm.net/dam/a/2c9/7a648164-4707-4c86-baba-5bad764542c9_954861_RETINA_PORTRAIT_3_2.jpg'/>
          <span>AK: Fate Loves The Fearless Tour</span><br />
          <span>2021-10-17</span><br />
        </EventItem>
      </EventModal>
      <Button onClick={() => {history.push("/payment")}} className="pay-btn">My Wallet Is Ready</Button>
    </div>

  );
};

export default Checkout;