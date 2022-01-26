// import modules
import React, {useState, useContext, useEffect} from 'react';


const LocationSelectForm = () => {

  // state variables
  const [latLong, setLatLong] = useState('');

  const handleLatLongChange = () => {
    setLatLong(event.target.value);
  };

  const handleLatLongSubmit = () => {
    console.log('you clicked submit: ', latLong);
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