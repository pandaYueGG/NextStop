import React, { useState } from 'react';
import axios from 'axios';
import cabin from './cabin.jpeg';
import luxury from './luxury.jpeg';
import dog from './dog.jpeg';
import fam from './fam.jpeg';

function Hotels() {


  return (
    <>
      <div className="py-5 px-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden">
          <img className="w-full h-64 rounded-lg" src={cabin} alt="cabin"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">COZY CABINS</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-64 rounded-lg" src={luxury} alt="luxury"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">LUXURY STAYS</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-64 rounded-lg" src={dog} alt="dog"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">PETS ALLOWED</div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <img className="w-full h-64 rounded-lg" src={fam} alt="family"></img>
          <div className="px-1 py-1">
            <div className="font-bold text-sm mb-2 text-left">FAMILY FRIENDLY</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotels;
