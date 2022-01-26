// import modules
import React, {useState, useContext, useEffect} from 'react';
import LocationSelectForm from './LocationSelectForm.jsx';


const App = () => {

  // state variables
  const [currentLoc, setCurrentLoc] = useState('40.0153,-105.2586');

  return (
    <div>
      <h1>Sky High Weather!!!</h1>
      <LocationSelectForm />
    </div>
  )

}



export default App;