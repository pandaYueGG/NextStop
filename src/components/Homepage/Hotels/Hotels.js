import React, { useState } from 'react';
import axios from 'axios';
import cabin from './cabin.jpeg';
import family from './family.jpeg';

function Hotels() {

  return (
    <>
    <h3 className="text-left text-3xl font-bold px-28">Living</h3>
      <div className="py-3 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
        <div className="rounded overflow-hidden">
          <img className="w-full h-3/4 rounded-lg shadow-inner cursor-pointer" src={cabin} alt="cabin"></img>
          <div className="px-1 py-1">
            <h3 className="font-bold text-sm mb-2 text-left">Luxury getaways</h3>
          </div>
        </div>

        <div className="rounded overflow-hidden">
          <img className="w-full h-3/4 rounded-lg shadow-inner cursor-pointer" src={family} alt="family"></img>
          <div className="px-1 py-1">
            <h3 className="font-bold text-sm mb-2 text-left">Budget friendly</h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hotels;
