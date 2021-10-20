import React, { useState } from 'react';
import axios from 'axios';
import music from './music.jpeg';
import art from './art.jpeg';
import sports from './sports.jpeg';

function Events() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventModalInfo, setEventModalInfo] = useState([]);

  const getModalInfoEvents = (filterEventQuery) => {
    axios.get('http://localhost:3001/api/events/')
      .then((res) => {
        const filteredEvents = res.data.events.filter((event) => {
          return event.classifications[0].segment.name === filterEventQuery;
        })
        setEventModalInfo(filteredEvents);
      })
  };

  return (
    <>
      {showEventModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* CONTENT */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col
              w-full bg-white outline-none focus:outline-none overflow-auto h-96">
                {/* HEADER */}
                <div className="flex items-start justify-between p-5 border-b
                border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold leading-relaxed">
                    Pick your activity
                  </h3>
                  {/* MODAL EXIT BUTTON */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20
                    float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEventModal(false)}>
                    <span>
                      ×
                    </span>
                  </button>
                </div>
                
                {/* EVENT GRID CONTAINER */}
                <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
                lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
                  {/* {console.log(eventModalInfo)} */}
                  {eventModalInfo.map((eventInfo) => (
                    <div className="rounded overflow-hidden h-72" key={eventInfo.id}>
                      {/* {console.log(eventInfo)} */}
                      {/* EVENT IMAGE */}
                      <img className="w-full h-3/5 rounded-lg shadow-inner cursor-pointer"
                        src={eventInfo.image.url}
                        alt="cabin"
                        onClick={() => { }}>
                      </img>
                      {/* EVENT INFORMATION */}
                      <div className="px-1 py-1 flex-col" key={eventInfo.id}>
                        <h3 className="font-bold text-xs mb-0 text-left text-gray-500">{eventInfo.venue.name}</h3>
                        <h3 className="font-bold text-xs mb-0 text-left">{eventInfo.name}</h3>
                        <h3 className="font-bold text-xs mb-0 float-left items-end">{eventInfo.time.slice(0, -3)}PST, {eventInfo.date}</h3>
                        <h3 className="font-bold text-xs mb-0 float-right items-end">${eventInfo.priceMin}</h3>
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

      {/* EVENT CARDS */}
      <h3 className="text-left text-3xl font-bold px-28">Events Near You</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* EVENT ART CARD */}
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={art} alt="art" onClick={() => { getModalInfoEvents('Arts & Theatre'); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Arts</div>
          </div>
        </div>
        {/* EVENT SPORTS CARD */}
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={sports} alt="sports" onClick={() => { getModalInfoEvents('Sports'); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Sports</div>
          </div>
        </div>
        {/* EVENT MUSIC CARD */}
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={music} alt="music" onClick={() => { getModalInfoEvents('Music'); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Music</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
