// import modules
import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';


const LocationSelectForm = () => {

  // state variables
  const [latLong, setLatLong] = useState('');

  // handle coordinate input changes
  const handleLatLongChange = () => {
    setLatLong(event.target.value);
  };

  // handle coordinate submit
  const handleLatLongSubmit = () => {
    console.log('you clicked submit: ', latLong);

    axios
      .get(`/api/noaa/${latLong}`)
      .then (res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('there was an error fetching NOAA data');
      })
  };

  return (
    <div>
      <div>boulder: 40.0153,-105.2586</div>
      <label>
        Enter a coord:
        <input type="text" value={latLong} onChange={handleLatLongChange}></input>
        <button onClick={handleLatLongSubmit}>Submit</button>
      </label>


    </div>
  )

}



export default LocationSelectForm;