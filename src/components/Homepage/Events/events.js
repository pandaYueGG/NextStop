import React, { useState } from 'react';
import axios from 'axios';
import music from './music.jpeg';
import outdoor from './outdoor.jpeg';
import pumpkin from './pumpkin.jpeg';
import wine from './wine.jpeg';

function Events() {

  return (
    <>
      <h3 className="text-left text-3xl font-bold px-28">Events Near You</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={pumpkin} alt="pumpkin"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">Festivities</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={wine} alt="wine"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">Tastings</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={outdoor} alt="outdoor"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">Outdoor</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer" src={music} alt="music"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">Music</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
