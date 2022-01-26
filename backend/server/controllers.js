// import modules
const axios = require('axios');
const {NOAA_url} = require('./config.js');


// controller functions to handle api requests
const controllers = {

  getNOAAData(req, res) {

    const {latLong} = req.params;

    axios
      .get(NOAA_url + `?airport=${latLong}&start=latest&n_hrs=2&data_source=Op40&fcst_len=shortest&`)
      .then( (noaaRes) => {

        // for query format instructions, see:
        // https://rucsoundings.noaa.gov/text_sounding_query_parameters.pdf

        // to see original data format or questions about data format, see:
        // https://rucsoundings.noaa.gov/raob_format.html


        // split 24 hr data into individual hour chunks and remove empty space at end
        let noaaData = noaaRes.data.trim().split('\n\n');

        // split each hour of data into individual rows
        noaaData = noaaData.map( hourlyData => hourlyData.split('\n'));

        // remove heading info from each hourly data set
        noaaData = noaaData.map( (hourlyData) => {
          hourlyData.splice(0, 1);
          hourlyData.splice(1, 1);
          return hourlyData;
        });


        // iterate through each hour of data
        noaaData = noaaData.map( (hourlyData) => {

          // iterate through each row within the hourly data, trim white space and split into individual elements
          hourlyData = hourlyData.map( row => row.trim().split(/\s+/) );

          return hourlyData;
        });


        // iterate through each hour of data and turn the relevant data into objects
        noaaData = noaaData.map( (hourlyData) => {

          // create utcDateTime property using info from first index
          let hourlyDataObj = {};

          hourlyDataObj.utcDateTime = {
            year: hourlyData[0][4],
            month: hourlyData[0][3],
            day: hourlyData[0][2],
            hour: hourlyData[0][1]
          }

          hourlyDataObj.weatherData = [];

          // iterate through elevation data
          for (let i = 1; i < hourlyData.length; i++) {

            let row = hourlyData[i];

            // check valid row number
            if (row[0] === '9' || row[0] === '4' || row[0] === '5') {

              // check valid data
              if (row[2] !== '99999' && row[5] !== '99999' && row[6] !== '99999') {

                // check altitude < 7000m
                if (Number(row[2]) < 7000) {

                  // then add it to the weatherData
                  hourlyDataObj.weatherData.push({
                    altitude: Number(row[2]),
                    windDir: Number(row[5]),
                    windSpeed: Number(row[6])
                  });
                }
              }
            }
          }

          return hourlyDataObj;
        });


        // return formatted data
        res.status(200).send(noaaData);
      })
      .catch( (err) => {
        console.log('there was an error retrieving NOAA data', err);
        res.status(200).send(err)
      });
  },

};

module.exports = controllers;