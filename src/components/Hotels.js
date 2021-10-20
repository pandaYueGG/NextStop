import React from 'react';
import { Img, Body, Box } from './ListCheckoutStyles.js';

const Hotels = () => {
  const data = {
    hotels: [
      {
        'id': 263431,
        'name': 'Fairmont Heritage Place, Ghirardelli Square',
        'starRating': 4.7,
        'image': 'https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '900 N Point Street',
          'city': 'San Francisco',
          'zip': '94109'
        },
        'pricePerNight': 908.25,
        'neighborhood': 'Fisherman’s Wharf',
        'coordinates': {
          'lat': 37.80551,
          'lng': -122.42206
        }
      },
      {
        'id': 447745,
        'name': 'Mansion on Sutter',
        'starRating': 4.7,
        'image': 'https://exp.cdn-hotels.com/hotels/8000000/7070000/7064400/7064385/e2eafbb9_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '1409 Sutter St',
          'city': 'San Francisco',
          'zip': '94109'
        },
        'pricePerNight': 480.68,
        'neighborhood': 'Lower Pacific Heights',
        'coordinates': {
          'lat': 37.787079,
          'lng': -122.423851
        }
      },
      {
        'id': 195370,
        'name': 'Four Seasons Hotel San Francisco',
        'starRating': 4.6,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/800000/791800/791769/5ebebd26_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '757 Market St',
          'city': 'San Francisco',
          'zip': '94103'
        },
        'pricePerNight': 598.12,
        'neighborhood': 'Union Square',
        'coordinates': {
          'lat': 37.786622,
          'lng': -122.404711
        }
      },
      {
        'id': 235570,
        'name': 'The St. Regis San Francisco',
        'starRating': 4.3,
        'image': 'https://exp.cdn-hotels.com/hotels/2000000/1330000/1322000/1321986/ea65da11_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '125 3rd St',
          'city': 'San Francisco',
          'zip': '94103'
        },
        'pricePerNight': 521.9,
        'neighborhood': 'Downtown San Francisco',
        'coordinates': {
          'lat': 37.78596,
          'lng': -122.40158
        }
      },
      {
        'id': 115783,
        'name': 'Fairmont San Francisco',
        'starRating': 4.4,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/20000/18200/18200/48b0cc8d_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '950 Mason Street Atop Nob Hill',
          'city': 'San Francisco',
          'zip': '94108'
        },
        'pricePerNight': 307.2,
        'neighborhood': 'Nob Hill',
        'coordinates': {
          'lat': 37.792404,
          'lng': -122.410622
        }
      },
      {
        'id': 124533,
        'name': 'The Ritz-Carlton, San Francisco',
        'starRating': 4.6,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/22200/22148/02842ca4_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '600 Stockton St',
          'city': 'San Francisco',
          'zip': '94108'
        },
        'pricePerNight': 450.48,
        'neighborhood': 'Downtown San Francisco',
        'coordinates': {
          'lat': 37.791712,
          'lng': -122.407436
        }
      },
      {
        'id': 141179,
        'name': 'Palace Hotel, a Luxury Collection Hotel, San Francisco',
        'starRating': 4.4,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/27300/27274/cb8526cf_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '2 New Montgomery St',
          'city': 'San Francisco',
          'zip': '94105'
        },
        'pricePerNight': 266.5,
        'neighborhood': 'Financial District',
        'coordinates': {
          'lat': 37.788682,
          'lng': -122.401919
        }
      },
      {
        'id': 115134,
        'name': 'Taj Campton Place',
        'starRating': 4.5,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/23400/23383/068a482b_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '340 Stockton St',
          'city': 'San Francisco',
          'zip': '94108'
        },
        'pricePerNight': 255,
        'neighborhood': 'Union Square',
        'coordinates': {
          'lat': 37.789103,
          'lng': -122.4069
        }
      },
      {
        'id': 108742,
        'name': 'Four Seasons Hotel San Francisco at Embarcadero',
        'starRating': 4.6,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/6600/6505/61f93c42_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '222 Sansome St',
          'city': 'San Francisco',
          'zip': '94104'
        },
        'pricePerNight': 593.12,
        'neighborhood': 'Financial District',
        'coordinates': {
          'lat': 37.792535,
          'lng': -122.400929
        }
      },
      {
        'id': 265998,
        'name': 'Cavallo Point',
        'starRating': 4.4,
        'image': 'https://exp.cdn-hotels.com/hotels/2000000/1890000/1886700/1886656/6d8aa6ba_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '601 Murray Circle',
          'city': 'Sausalito',
          'zip': '94965'
        },
        'pricePerNight': 673.13,
        'neighborhood': 'Sausalito',
        'coordinates': {
          'lat': 37.83724,
          'lng': -122.47854
        }
      },
      {
        'id': 194583,
        'name': 'Omni San Francisco Hotel',
        'starRating': 4.7,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/670000/662400/662368/670df73a_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '500 California St',
          'city': 'San Francisco',
          'zip': '94104'
        },
        'pricePerNight': 197.67,
        'neighborhood': 'Financial District',
        'coordinates': {
          'lat': 37.792928,
          'lng': -122.402712
        }
      },
      {
        'id': 105310,
        'name': 'The Westin St. Francis San Francisco on Union Square',
        'starRating': 4.3,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/26800/26760/70841a4c_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '335 Powell Street',
          'city': 'San Francisco',
          'zip': '94102'
        },
        'pricePerNight': 169,
        'neighborhood': 'Union Square',
        'coordinates': {
          'lat': 37.78773,
          'lng': -122.40822
        }
      },
      {
        'id': 211817,
        'name': 'Argonaut Hotel - a Noble House Hotel',
        'starRating': 4.5,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/920000/915600/915510/49fa748f_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '495 Jefferson St',
          'city': 'San Francisco',
          'zip': '94109'
        },
        'pricePerNight': 281.5,
        'neighborhood': 'Fisherman’s Wharf',
        'coordinates': {
          'lat': 37.80766,
          'lng': -122.420306
        }
      },
      {
        'id': 127103,
        'name': 'JW Marriott San Francisco Union Square',
        'starRating': 4.3,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/2100/2063/0a58e614_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '515 Mason Street',
          'city': 'San Francisco',
          'zip': '94102'
        },
        'pricePerNight': 205.38,
        'neighborhood': 'Union Square',
        'coordinates': {
          'lat': 37.788377,
          'lng': -122.410148
        }
      },
      {
        'id': 145299,
        'name': 'W San Francisco',
        'starRating': 4.3,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/290000/287200/287112/0e73d7e3_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '181 3rd St',
          'city': 'San Francisco',
          'zip': '94103'
        },
        'pricePerNight': 201.03,
        'neighborhood': 'South Beach',
        'coordinates': {
          'lat': 37.785262,
          'lng': -122.400493
        }
      },
      {
        'id': 116987,
        'name': 'Hotel Nikko San Francisco',
        'starRating': 4.5,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/23500/23406/3cce951b_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '222 Mason St',
          'city': 'San Francisco',
          'zip': '94102'
        },
        'pricePerNight': 224.78,
        'neighborhood': 'Downtown San Francisco',
        'coordinates': {
          'lat': 37.785683,
          'lng': -122.409575
        }
      },
      {
        'id': 210688,
        'name': 'Club Quarters Hotel in San Francisco',
        'starRating': 4.2,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/920000/913000/912982/832c79fe_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '424 Clay St',
          'city': 'San Francisco',
          'zip': '94111'
        },
        'pricePerNight': 136.13,
        'neighborhood': 'Financial District',
        'coordinates': {
          'lat': 37.794972,
          'lng': -122.400809
        }
      },
      {
        'id': 600144064,
        'name': 'San Francisco Proper Hotel',
        'starRating': 4.3,
        'image': 'https://exp.cdn-hotels.com/hotels/19000000/18730000/18723300/18723252/41530c2f_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '1100 Market Street',
          'city': 'San Francisco',
          'zip': '94102'
        },
        'pricePerNight': 322.75,
        'neighborhood': 'Downtown San Francisco',
        'coordinates': {
          'lat': 37.78087,
          'lng': -122.41242
        }
      },
      {
        'id': 1055269088,
        'name': 'BEI San Francisco, Trademark Collection by Wyndham',
        'starRating': 4.1,
        'image': 'https://exp.cdn-hotels.com/hotels/33000000/32950000/32946000/32945909/1086dfae_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '50 8th Street',
          'city': 'San Francisco',
          'zip': '94103'
        },
        'pricePerNight': 200.93,
        'neighborhood': 'Mid-Market',
        'coordinates': {
          'lat': 37.777984,
          'lng': -122.413871
        }
      },
      {
        'id': 115718,
        'name': 'Hotel Triton',
        'starRating': 4.1,
        'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/1200/1110/0fdb0ab1_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
        'address': {
          'streetAddress': '342 Grant Ave',
          'city': 'San Francisco',
          'zip': '94108'
        },
        'pricePerNight': 148.2,
        'neighborhood': 'Union Square',
        'coordinates': {
          'lat': 37.790339,
          'lng': -122.405492
        }
      }
    ]
  }
  return (
    <div>
      {data.hotels.map(hotel => (
        <Box>
          <Img src={hotel.image} alt={hotel.name}/>
          <Body>
            <h4>{hotel.name}</h4>
            <p>{hotel.address.streetAddress}, {hotel.address.city}, {hotel.address.zip}</p>
            <p>Price: {hotel.pricePerNight}</p>
            <p>{hotel.neighborhood}</p>
            <p>Rating: {hotel.starRating}</p>
          </Body>
        </Box>
      )
      )}
    </div>
  )
}

export default Hotels;