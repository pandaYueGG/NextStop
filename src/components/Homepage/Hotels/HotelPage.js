import React, { useState } from 'react';
import axios from 'axios';
import wharf from './wharf.png';

function HotelPage() {

    const [hotelInfo, setHotelInfo] = useState([]);

    const getHotelInfo = () => {
        axios.get('http://localhost:3001/api/hotels/')
        .then((res) => {
          setHotelInfo(res.data.hotels[0]);
          console.log('gethotelinfohere', hotelInfo)
          console.log(hotelInfo.image)
        })
    }

    return (
        <div className="pt-10">
            <img className="w-1/4 rounded cursor-pointer" src="https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high"></img>
            <div className="text-left">
            <h1 className="font-bold text-xl">Fisherman's Wharf</h1>
            <h1 className="font-bold text-2xl">Fairmont Heritage Place, Ghirardelli Square</h1>
            <h1 className="font-bold text-xl">900 N Point Street, San Francisco, CA, 94109</h1>
            <h1 className="font-bold text-xl">$719 per night</h1>
            <h1 className="font-bold text-xl">4.7 Star Rating</h1>
            <img className="w-2/4" src={wharf}></img>
            </div>
        </div>
    )
}

export default HotelPage;


// {id: 263431, name: 'Fairmont Heritage Place, Ghirardelli Square', starRating: 4.7, image: 'https://exp.cdn-hotels.com/hotels/2000000/1860000/…/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high', address: {…}, …}
// address: {streetAddress: '900 N Point Street', city: 'San Francisco', zip: '94109'}
// coordinates: {lat: 37.80551, lng: -122.42206}
// id: 263431
// image: "https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
// name: "Fairmont Heritage Place, Ghirardelli Square"
// neighborhood: "Fisherman's Wharf"
// pricePerNight: 719
// starRating: 4.7