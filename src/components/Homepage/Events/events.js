import React, { useState } from 'react';
import axios from 'axios';
import music from './music.jpeg';
import outdoor from './outdoor.jpeg';
import pumpkin from './pumpkin.jpeg';
import wine from './wine.jpeg';

function Events() {


  return (
    <>
      <div className="py-10 px-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-40 rounded-lg" src={pumpkin} alt="pumpkin"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">FESTIVITIES</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-40 rounded-lg" src={wine} alt="wine"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">TASTINGS</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-40 rounded-lg" src={outdoor} alt="outdoor"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">OUTDOOR</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-40 rounded-lg" src={music} alt="music"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">MUSIC</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
