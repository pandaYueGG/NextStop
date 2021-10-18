const axios = require('axios');
const TICKETMASTER_API_KEY = require('./config.js');

// Plan to include helper functions that interact with necessary APIs here
module.exports = {
  getEvents: (req, res) => {
    const city = req.body.city || 'San Francisco';
    const date = req.body.date || '2021-10-24';
    const sort = req.body.sortMethod || 'date,asc';
    const size = req.body.size || 5;

    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${TICKETMASTER_API_KEY}&city=[${city}]&startDate=${date}&sort=${sort}&size=${size}`)
      .then((data) => {
        const events = data.data._embedded.events
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
  }
};
