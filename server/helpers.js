const axios = require('axios');
const TOKENS = require('./config.js');

module.exports = {
  getEvents: (req, res) => {
    const city = req.query.city || 'San Francisco';
    const date = req.query.date || '2021-10-24';
    const sort = req.query.sortMethod || 'date,asc';
    const size = req.query.size || 20;

    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${TOKENS.TICKETMASTER_API_KEY}&city=[${city}]&startDate=${date}&radius=50&sort=${sort}&size=${size}`)
      .then((response) => {
        const events = response.data._embedded.events
        let output = {"events": []};
        for (var i = 0; i < events.length; i++) {
          let current = {
            id: events[i].id,
            name: events[i].name,
            url: events[i].url,
            image: events[i].images ? events[i].images[0] : 'Image Unavailable',
            date: events[i].dates.start.localDate,
            time: events[i].dates.start.localTime,
            priceMin: events[i].priceRanges ? events[i].priceRanges[0].min : 0,
            priceMax: events[i].priceRanges ? events[i].priceRanges[0].max : 0,
            venue: {
              name: events[i]._embedded.venues[0].name,
              city: events[i]._embedded.venues[0].city ? events[i]._embedded.venues[0].city.name : city,
              state: events[i]._embedded.venues[0].state ? events[i]._embedded.venues[0].state.name : 'N/A',
              postalCode: events[i]._embedded.venues[0].postalCode,
              streetAddress: events[i]._embedded.venues[0].address.line1,
            },
            classifications: events[i].classifications,
          };
          output.events.push(current);
        }
        res.status(200).send(output);
      })
  },
  getEventsWithLocation: (req, res) => {
    const city = req.query.city || 'San Francisco';
    const date = req.query.date || '2021-10-24';
    const sort = req.query.sortMethod || 'date,asc';
    const size = req.query.size || 20;
    const lat = req.query.lat || '37.7749';
    const lng = req.query.lng || '-122.4194';

    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${TOKENS.TICKETMASTER_API_KEY}&latlong=${lat},${lng}&startDate=${date}&radius=50&sort=${sort}&size=${size}`)
      .then((response) => {
        const events = response.data._embedded.events
        let output = {"events": []};
        for (var i = 0; i < events.length; i++) {
          let current = {
            id: events[i].id,
            name: events[i].name,
            url: events[i].url,
            image: events[i].images ? events[i].images[0] : 'Image Unavailable',
            date: events[i].dates.start.localDate,
            time: events[i].dates.start.localTime,
            priceMin: events[i].priceRanges ? events[i].priceRanges[0].min : 0,
            priceMax: events[i].priceRanges ? events[i].priceRanges[0].max : 0,
            venue: {
              name: events[i]._embedded.venues[0].name,
              city: events[i]._embedded.venues[0].city ? events[i]._embedded.venues[0].city.name : city,
              state: events[i]._embedded.venues[0].state ? events[i]._embedded.venues[0].state.name : 'N/A',
              postalCode: events[i]._embedded.venues[0].postalCode,
              streetAddress: events[i]._embedded.venues[0].address.line1,
            },
            classifications: events[i].classifications,
          };
          output.events.push(current);
        }
        res.status(200).send(output);
      })
  },
  getHotels: (req, res) => {
    const city = req.query.city?.split(' ').join('+') || 'San+Francisco';
    const checkin_date = req.query.checkin_date || '2021-10-24';
    const checkout_date = req.query.checkout_date || '2021-10-25';
    const sortOrder = req.query.sort_order || 'STAR_RATING_HIGHEST_FIRST';

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${TOKENS.GOOGLE_GEOCODING_KEY}`)
      .then((response) => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const options = {
          method: 'GET',
          url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby',
          params: {
            latitude: lat,
            currency: 'USD',
            longitude: lng,
            checkout_date: checkout_date,
            sort_order: sortOrder,
            checkin_date: checkin_date,
            adults_number: '1',
            locale: 'en_US',
            guest_rating_min: '4',
            star_rating_ids: '3,4,5',
            page_number: '1',
            price_min: '10',
            accommodation_ids: '1,3,8,20'
          },
          headers: {
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
            'x-rapidapi-key': TOKENS.RAPID_API_KEY,
          }
        }

        axios.request(options)
          .then((data) => {
            const hotels = data.data.searchResults.results;
            const output = {'hotels': []};
            for (var i = 0; i < 20; i++) {
              let current = {
                id: hotels[i].id,
                name: hotels[i].name,
                starRating: hotels[i].guestReviews.unformattedRating,
                image: hotels[i].optimizedThumbUrls.srpDesktop,
                address: {
                  streetAddress: hotels[i].address.streetAddress,
                  city: hotels[i].address.locality,
                  zip: hotels[i].address.postalCode,
                },
                pricePerNight: hotels[i].ratePlan.price.exactCurrent,
                neighborhood: hotels[i].neighbourhood,
                coordinates: {
                  lat: hotels[i].coordinate.lat,
                  lng: hotels[i].coordinate.lon,
                }
              };
              output.hotels.push(current)
            }
            res.status(200).send(output);
          })
      })
  },
  getHotelsWithLocation: (req, res) => {
    const checkin_date = req.query.checkin_date || '2021-10-24';
    const checkout_date = req.query.checkout_date || '2021-10-25';
    const sortOrder = req.query.sort_order || 'STAR_RATING_HIGHEST_FIRST';
    const lat = req.query.lat || '37.7749';
    const lng = req.query.lng || '-122.4194';
    const options = {
      method: 'GET',
      url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby',
      params: {
        latitude: lat,
        currency: 'USD',
        longitude: lng,
        checkout_date: checkout_date,
        sort_order: sortOrder,
        checkin_date: checkin_date,
        adults_number: '1',
        locale: 'en_US',
        guest_rating_min: '4',
        star_rating_ids: '3,4,5',
        page_number: '1',
        price_min: '10',
        accommodation_ids: '1,3,8,20'
      },
      headers: {
        'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
        'x-rapidapi-key': TOKENS.RAPID_API_KEY,
      }
    }

    axios.request(options)
      .then((data) => {
        const hotels = data.data.searchResults.results;
        const output = {'hotels': []};
        for (var i = 0; i < 20; i++) {
          let current = {
            id: hotels[i].id,
            name: hotels[i].name,
            starRating: hotels[i].guestReviews.unformattedRating,
            image: hotels[i].optimizedThumbUrls.srpDesktop,
            address: {
              streetAddress: hotels[i].address.streetAddress,
              city: hotels[i].address.locality,
              zip: hotels[i].address.postalCode,
            },
            pricePerNight: hotels[i].ratePlan.price.exactCurrent,
            neighborhood: hotels[i].neighbourhood,
            coordinates: {
              lat: hotels[i].coordinate.lat,
              lng: hotels[i].coordinate.lon,
            }
          };
          output.hotels.push(current)
        }
        res.status(200).send(output);
      })

  },
};
