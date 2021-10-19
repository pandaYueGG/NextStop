const axios = require('axios');
const { X_RAPID_API_KEY } = require('./config.js');



module.exports = {

  getAirport: (req, res) => {
    const location = req.body.location || 'San Francisco';

    var options = {
      method: 'GET',
      url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/',
      params: { query: location },
      headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': X_RAPID_API_KEY
      }
    };

    axios.request(options)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getRoutes: (req, res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const origin = req.body.origin || 'SFO'
    const destination = req.body.destination || 'JFK'
    const outboundDate = req.body.outboundDate || today
    const inboundDate = req.body.inboundDate || ''

    var options = {
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${origin}/${destination}/${outboundDate}`,
      params: { inboundpartialdate: inboundDate },
      headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': X_RAPID_API_KEY
      }
    };

    axios.request(options)
      .then((response) => {
        let formattedResponse = {};
        const {Places, Carriers, Quotes} = response.data;
        formattedResponse.origin = Places[1].Name;
        formattedResponse.destination = Places[0].Name;
        formattedResponse.flight = [];
        for (let i = 0; i < Quotes.length; i++ ) {
          let flight = {
            price: Quotes[i].MinPrice,
            departure: Quotes[i].OutboundLeg.DepartureDate,
            airline: Carriers[i].Name
          }
          formattedResponse.flight.push(flight);
        }
        res.send(formattedResponse);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  }
}