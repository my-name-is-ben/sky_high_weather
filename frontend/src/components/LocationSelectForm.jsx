// import modules
import React, {useState, useContext} from 'react';
import GlobalContext from '../contexts/index.jsx';
import axios from 'axios';


const LocationSelectForm = () => {

  // import state variables from context provider
  const { setCurrentLatLong, setCurrentNOAAData } = useContext(GlobalContext);

  // local state variables
  const [latLongInput, setLatLongInput] = useState('');

  // handle coordinate input changes
  const handleLatLongInputChange = () => {
    setLatLongInput(event.target.value);
  };

  // handle coordinate submit
  const handleLatLongInputSubmit = () => {

    setCurrentLatLong(latLongInput);

    axios
      .get(`/api/noaa/${latLongInput}`)
      .then (res => {
        setCurrentNOAAData(res.data);
        setLatLongInput('');
      })
      .catch(err => {
        console.log('there was an error fetching NOAA data');
      })
  };

  return (
    <div>
      <label>
        Enter a coord:
        <input type="text" value={latLongInput} onChange={handleLatLongInputChange} placeholder="ex: 40.0153,-105.2586"></input>
        <button onClick={handleLatLongInputSubmit}>Submit</button>
        <div>Not sure what your grid coordinates are? Try
          <a href="https://www.google.com/maps/" target="_blank"> Google Maps</a>
        </div>
      </label>


    </div>
  )

}



export default LocationSelectForm;