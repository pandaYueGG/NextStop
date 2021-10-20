import React from 'react';
import './Styled/search.css';

const Search = () => {
  const [arrivalDate, setArrivalDate] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState('');
  const [destination, setDestination] = React.useState('');

  return (
    <div className="banner justify-center xl:justify-start">
      <div className="search w-4/5 h-4/5 xl:w-1/4 xl:h-3/4">
        <div className="search-body">
          <div className="my-2">
            <h1>Let's plan out your flights and hotels so you don't miss your next event.</h1>
          </div>
          <div className="my-2">
            <h3>Destination</h3>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Depart" />
          </div>
          <div className="my-2 grid grid-cols-2 grid-template-rows-2 gap-x-2">
            <h3>Arrive</h3>
            <h3>Depart</h3>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
          </div>
          <div className="flex flex-row my-4">
              <button className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Flights</button>
              <button className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Hotels</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
