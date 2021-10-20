import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import './Styled/search.css';
import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const Search = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [destination, setDestination] = useState(new Date());

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="banner justify-center xl:justify-start">
      <div className="search w-full h-auto sm:w-4/5 sm:h-4/5 xl:w-2/6 xl:h-3/4">
        <div className="search-body">
          <div className="my-2">
            <h1>Let's plan out your flights and hotels so you don't miss your next event.</h1>
          </div>
          <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <input type="text" placeholder="Leaving from" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
          </div>
          <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <input type="text" placeholder="Going to" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
          </div>
          <div className="my-2 grid grid-cols-2 grid-template-rows-2 gap-x-2">
            <h3>Departing</h3>
            <h3>Returning</h3>
            <DatePicker date={departureDate} onDateChange={setDepartureDate} locale={enGB}>
              {({ inputProps, focused }) => (
                <input 
                  className={'input' + (focused ? ' -focused' : '') + 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                  {...inputProps}
                />
              )}
            </DatePicker>
            <DatePicker date={arrivalDate} onDateChange={setArrivalDate} locale={enGB}>
              {({ inputProps, focused }) => (
                <input 
                  className={'input' + (focused ? ' -focused' : '') + 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                  {...inputProps}
                />
              )}
            </DatePicker>
            {/* <DatePicker onChange={setDepartureDate} value={departureDate} />
            <DatePicker onChange={setArrivalDate} value={arrivalDate} /> */}
            {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" /> */}
          </div>
          <div className="flex flex-row my-4">
              <button className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Flights</button>
              <button className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Hotels</button>
              <button className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Events</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;