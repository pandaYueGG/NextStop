import React, { useState } from 'react';
import axios from 'axios';
import music from './music.jpeg';
import outdoor from './outdoor.jpeg';
import pumpkin from './pumpkin.jpeg';
import wine from './wine.jpeg';

function Events() {
  const [showEventModal, setShowEventModal] = React.useState(false);

  const getModalInfoEvents = () => {
    // axios.get('/events')
    //   .then((res) => {
    //     console.log('get request for events', res);
    //   })
  };

  return (
    <>
       {showEventModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Events
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEventModal(false)}
                  >
                    <span>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    list of events
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <h3 className="text-left text-3xl font-bold px-28">Events Near You</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={pumpkin} alt="pumpkin" onClick={() => { getModalInfoEvents(); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Festivities</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={wine} alt="wine" onClick={() => { getModalInfoEvents(); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Tastings</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={outdoor} alt="outdoor" onClick={() => { getModalInfoEvents(); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Outdoor</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={music} alt="music" onClick={() => { getModalInfoEvents(); setShowEventModal(true) }}></img>
          <div className="px-1 py-1">
            <div className="font-bold text-base mb-2 text-left">Music</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
