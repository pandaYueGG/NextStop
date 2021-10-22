import React, { useState } from 'react';

function HotelPage(props) {
    const [hotelInfo, setHotelInfo] = useState([]);

    return (
        <div className="flex pt-10 pl-20">
            <div className="flex rounded-3xl  items-center justify-center border-2 w-3/5 shadow-lg">
                <div className="">
                    <h1 className="pl-16 pb-5 text-3xl">Fairmont Heritage Place, Ghirardelli Square</h1>
                    <h1 className="pr-96 pb-5 text-base">⭐ 4.7 Rating</h1>
                    <div className="flex justify-center items-center">
                        <img className="w-3/5 rounded-2xl cursor-pointer" alt="hotel"
                            src="https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high"></img>
                    </div>
                    <div className="flex-col justify-start">
                        <div className="pr-40 pt-3 text-xl">Fisherman's Wharf</div>
                        <div className="pt-3 text-lg">900 N Point Street, San Francisco, CA, 94109</div >
                        {/* <div className="pt-5 pb-3 text-lg">$719 per night</div > */}
                    </div>
                </div>
            </div>
            <div className="flex-col rounded-3xl pt-5 border-2 w-1/4 h-full m-20 shadow-lg">
                <p className="">$719 / night</p>
                <div className="flex-col rounded-3xl pt-2 pb-2 border-2 w-4/5 h-full m-10">
                    <div className="pt-2 pb-2">
                        <label className="text-xs">CHECK-IN </label>
                        <input className="border-2 rounded-xl text-sm" type="text" placeholder=" Add date"></input>
                    </div>
                    <div className="pb-2">
                        <label className="text-xs">CHECK-OUT </label>
                        <input className="border-2 rounded-xl text-sm" type="text" placeholder=" Add date"></input>
                    </div>
                    <div className="pb-2">
                        <label className="text-xs">GUESTS </label>
                        <input className="border-2 rounded-xl text-sm" type="text" placeholder=" 1 guest" input="guestNumber"></input>
                    </div>
                </div>
                <div className="pb-5">
                    <button className="py-2 px-3 text-white bg-red-400 hover:bg-red-500 rounded  " onClick={() => { }}>Check availability</button>

                </div>
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