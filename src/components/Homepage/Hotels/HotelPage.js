import React from 'react';
import hotelpage_1 from './hotelpage_1.jpeg';
import hotelpage_8 from './hotelpage_8.jpeg';
import hotelpage_9 from './hotelpage_9.jpeg';



function HotelPage() {

    return (
        <>
            <h1 className="text-left font-medium pl-28 pt-10 text-3xl">Fairmont Heritage Place, Ghirardelli Square</h1>
            <h1 className="text-left font-medium pl-28 pt-3 text-md">★ 4.7 Rating  -  Fisherman's Wharf, California, United States</h1>

            <div className="container mx-auto">
                <div className="grid-cols-3 pt-5 pl-10 pr-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
                    <div className="w-full col-span-2 row-span-2 rounded cursor-pointer">
                        <img className="w-full rounded-2xl cursor-pointer" src={hotelpage_1}
                            alt="hotel"></img>
                    </div>
                    <div className="w-full rounded">
                        <img className="w-full rounded-2xl cursor-pointer" src={hotelpage_9}
                            alt="hotel"></img>
                    </div>
                    <div className="w-full rounded cursor-pointer">
                        <img className="w-full rounded-2xl cursor-pointer" src={hotelpage_8}
                            alt="hotel"></img>
                    </div>
                </div>
            </div>
            <div className="flex pt-7">
                {/* <p className="text-left font-medium pl-28 pt-3 pb-3 text-md">900 N Point Street, San Francisco, CA, 94109</p> */}
                <div className="flex-col ml-28 rounded-3xl border-2 w-1/4 shadow-lg pl-7 mb-96">
                    <p className="pt-3 pr-48 font-medium">$719 / night</p>
                    <div className="rounded-3xl pt-1 pb-1 border-2 w-4/5 m-4">
                        <div className="pt-2 pb-2">
                            <label className="text-xs">CHECK-IN </label>
                            <input className="border-2 rounded-xl text-sm" type="text" placeholder="  Add date"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-xs">CHECK-OUT </label>
                            <input className="border-2 rounded-xl text-sm" type="text" placeholder="  Add date"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-xs">GUESTS </label>
                            <input className="border-2 rounded-xl text-sm" type="text" placeholder="  1 guest" input="guestNumber"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-xs">SUITE </label>
                            <input className="border-2 rounded-xl text-sm" type="text" placeholder="  Queen Suite" input="guestNumber"></input>
                        </div>
                    </div>
                    <div className="pb-5 pr-8">
                        <button className="py-2 px-3 text-white w-4/5 bg-red-400 hover:bg-red-500 rounded " onClick={() => { }}>Check availability</button>
                    </div>
                </div>
                <div className="container w-3/5">
                <h3 className="text-left font-medium pl-16 pb-3 text-2xl">Welcome to Fairmont Hotel</h3>
                    <p className="text-left font-medium pl-28 pt-3 text-sm">Leave Your Heart In San Francisco World-renowned, Fairmont San Francisco presents the grandeur of</p>
                    <p className="text-left font-medium pl-16 text-sm">luxury with the best panoramic views in the City coupled with a reputation for impeccable service to deliver</p>
                    <p className="text-left font-medium pl-16 pb-3 text-sm"> a truly memorable experience during your visit. Known for turning moments into memories for leisure and business travelers alike, this grand, centrally-located property has hosted some of the most influential meetings and events, breathtaking weddings and personalized special occasions of the century.</p>
                    <p className="text-left font-medium pl-28 text-sm">In addition to its 606 guest rooms and suites, this luxury hotel offers fine dining with two renowned</p>
                    <p className="text-left font-medium pl-16 text-sm"> restaurants, as well as 72,000 square feet of spectacular function space. With views of the City and the Bay from</p>
                    <p className="text-left font-medium pl-16 pb-10 text-sm">high atop Nob Hill that are unbeatable, Fairmont San Francisco presents an unmatched blend of luxurious accommodations, elegant meeting spaces, and superb services, which make for an unforgettable stay.</p>
                    <h3 className="text-left font-medium pl-16 pb-3 text-xl">Location</h3>
                    <p className="text-left font-medium pl-28 pt-3 pb-6 text-sm">900 N Point Street, San Francisco, CA, 94109</p>
                    <h3 className="text-left font-medium pl-16 pb-3 text-xl">Guest Services</h3>
                    <div className="grid grid-cols-2">
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Bell Staff</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Business Services</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Check-in / Check-out</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Concierge Services</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Housekeeping</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Laundry Services</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Parking</p>
                        <p className="text-left font-medium pl-20 pt-3 pb-3 text-sm">⚬ Pet Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelPage;


{/* <div className="flex pt-10 pl-20">
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
        </div> */}