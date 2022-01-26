// import modules
const axios = require('axios');
const {NOAA_url} = require('./config.js');


// controller functions to handle api requests
const controllers = {

  getNOAAData(req, res) {

    const {latLong} = req.body;

    axios
      .get(NOAA_url + `?airport=${latLong}&start=latest&n_hrs=1&data_source=Op40&fcst_len=shortest&`)
      .then( (noaaRes) => {
        res.status(200).send(noaaRes.data);
      })
      .catch( (err) => {
        console.log('there was an error retrieving NOAA data', err);
        res.status(200).send(err)
      });
  },

};

module.exports = controllers;