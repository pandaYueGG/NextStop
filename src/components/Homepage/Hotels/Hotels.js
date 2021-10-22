import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import cabin from './cabin.jpeg';
import family from './family.jpeg';
import { useHistory } from 'react-router-dom';
import HotelPage from './HotelPage.js';

const HotelContext = React.createContext()

function Hotels() {
  const [showHotelModal, setShowHotelModal] = useState(false);
  const [hotelModalInfo, setHotelModalInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);

  const [user, setUser] = useState('Me!');

  let renderHotelPage = useHistory();

  const getModalInfoHotels = (sortOrderBudgetQuery) => {
    axios.get('http://localhost:3001/api/hotels/', { params: { sort_order: sortOrderBudgetQuery}})
      .then((res) => {
        setHotelModalInfo(res.data.hotels);
        // console.log(res.data.hotels)
      })
  };

  const getHotelInfo = (clickedHotel) => {
    setHotelInfo(clickedHotel);
    console.log('hotel info state', hotelInfo);
  }

  return (
    <>
      {showHotelModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* CONTENT */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-auto h-96">
                {/* HEADER */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold leading-relaxed">
                    Pick your stay
                  </h3>
                  {/* MODAL EXIT BUTTON */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowHotelModal(false)}>
                    <span>
                      ×
                    </span>
                  </button>
                </div>

                {/* HOTEL GRID CONTAINER */}
                <div className="py-3 px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
                  {hotelModalInfo.map((hotelInfo) => (
                    <div className="rounded overflow-hidden h-72" key={hotelInfo.id}>
                    {/* HOTEL IMAGE */}
                      <img className="w-full h-3/4 rounded-lg shadow-inner cursor-pointer"
                        src={hotelInfo.image}
                        alt="cabin"
                        onClick={() => {renderHotelPage.push("/hotelpage"); getHotelInfo([hotelInfo]); console.log(hotelInfo)}}>
                      </img>
                    {/* HOTEL INFORMATION */}
                      <div className="px-1 py-1 flex-col" key={hotelInfo.id}>
                        <h3 className="font-bold text-xs mb-0 text-left text-gray-500">{hotelInfo.neighborhood}</h3>
                        <h3 className="font-bold text-xs mb-0 text-left">{hotelInfo.name}</h3>
                          <h3 className="font-bold text-xs mb-0 float-left items-end">⭐ {hotelInfo.starRating}</h3>
                          <h3 className="font-bold text-xs mb-0 float-right items-end">${hotelInfo.pricePerNight} / night</h3>
                      </div>
                    </div>
                   ))}
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


      {/* LUXURY GETAWAY CARD */}
      <h3 className="text-left text-3xl font-bold px-28">Living</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
        <div className="rounded overflow-hidden">
          <img className="w-full h-3/4 rounded-lg shadow-inner cursor-pointer"
            src={cabin}
            alt="cabin"
            onClick={() => { getModalInfoHotels(); setShowHotelModal(true) }}>
          </img>
          <div className="px-1 py-1">
            <h3 className="font-bold text-lg mb-2 text-left">Luxury getaways</h3>
          </div>
        </div>
        {/* BUDGET FRIENDLY CARD */}
        <div className="rounded overflow-hidden">
          <img className="w-full h-3/4 rounded-lg shadow-inner cursor-pointer"
            src={family}
            alt="family"
            onClick={() => { getModalInfoHotels('STAR_RATING_LOWEST_FIRST'); setShowHotelModal(true) }}
          ></img>
          <div className="px-1 py-1">
            <h3 className="font-bold text-lg mb-2 text-left">Budget friendly</h3>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hotels;
