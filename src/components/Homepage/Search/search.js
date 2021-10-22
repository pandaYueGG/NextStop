import React, { useState, useEffect, useRef } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import './Styled/search.css';
import { useHistory} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Fade from 'react-reveal/Fade';

const options = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

const Search = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [origin, setOrigin] = useState('San Francisco');
  const [destination, setDestination] = useState('');

  const handleOrigin = (e) => {
    setOrigin(e.target.value);
  }

  const handleDestination = (e) => {
    setDestination(e.target.value);
  }

  let history = useHistory();

  const [display, setDisplay] = useState(false);
  const [destinationDisplay, setDestinationDisplay] = useState(false);

  const setOptions = option => {
    setOrigin(option);
    setDisplay(false);
  }

  const setDestinationOptions = option => {
    setDestination(option);
    setDestinationDisplay(false);
  }

  const wrapperRef = useRef(null);
  const destinationWrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutsideDestination);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideDestination);
    }
  }, []);

  const handleClickOutside = e => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const handleClickOutsideDestination = e => {
    const { current: wrap } = destinationWrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDestinationDisplay(false);
    }
  };

  return (
    <div className="banner justify-center xl:justify-start fast">
      <Fade>
      <div className="search w-full h-auto sm:w-4/5 sm:h-4/5 xl:w-2/6 xl:h-3/4">
        <div className="search-body">
          <Fade top><div className="my-2">
            <h1>Let's plan out your flights and hotels so you don't miss your next event.</h1>
          </div></Fade>

          <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <div class="relative flex w-full flex-wrap items-stretch mb-3">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input type="text" placeholder="Leaving from" onClick={() => setDisplay(!display)} value={origin} onChange={handleOrigin} class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
            { display && (
              <div className="autoContainer">
                {options.filter((value) => value.toLowerCase().indexOf(origin.toLowerCase()) > -1).map((value, index) => {
                  return (
                  <div className="option" onClick={() => setOptions(value)} key={index}>
                    <span>{value}</span>
                  </div>
                );
                })}
              </div>
            )}
          </div>

          <div ref={destinationWrapperRef} className="flex-container flex-column pos-rel">
            <div class="relative flex w-full flex-wrap items-stretch mb-3">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input type="text" placeholder="Going to" onClick={() => setDestinationDisplay(!destinationDisplay)} value={destination} onChange={handleDestination} class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
            { destinationDisplay && (
              <div className="autoContainer">
                {options.filter((value) => value.toLowerCase().indexOf(destination.toLowerCase()) > -1).map((value, index) => {
                  return (
                  <div className="option" onClick={() => setDestinationOptions(value)} key={index}>
                    <span>{value}</span>
                  </div>
                );
                })}
              </div>
            )}
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
          </div>
          <div className="flex flex-row my-4">
              <Fade bottom delay={400}><a href='/searchFlight' className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Flights</a></Fade>
              <Fade bottom delay={400}><a href='/hotels' className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Hotels</a></Fade>
              <Fade bottom delay={400}><a href='/events' className="py-3 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5">Find Events</a></Fade>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Search;