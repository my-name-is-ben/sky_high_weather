import React, {useState, useContext, useEffect} from 'react';
import GlobalContext from '../contexts/index.jsx';

const SoundingTableContainer = () => {

  // import state variables from context provider
  const { currentNOAAData } = useContext(GlobalContext);


  // build an array to store the NOAA data in table rows
  let rowData = [];
  const buildRowData = () => {

    if (currentNOAAData.length === 0) {
      return 0;
    }

    for (let i = 0; i < currentNOAAData[0].weatherData.length; i++) {
      rowData.push(
        <tr key={i}>
          <td>{`${currentNOAAData[0].weatherData[i].altitude} m`}</td>
          <td>{`${currentNOAAData[0].weatherData[i].windDir}° @ ${currentNOAAData[0].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[1].weatherData[i].windDir}° @ ${currentNOAAData[1].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[2].weatherData[i].windDir}° @ ${currentNOAAData[2].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[3].weatherData[i].windDir}° @ ${currentNOAAData[3].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[4].weatherData[i].windDir}° @ ${currentNOAAData[4].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[5].weatherData[i].windDir}° @ ${currentNOAAData[5].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[6].weatherData[i].windDir}° @ ${currentNOAAData[6].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[7].weatherData[i].windDir}° @ ${currentNOAAData[7].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[8].weatherData[i].windDir}° @ ${currentNOAAData[8].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[9].weatherData[i].windDir}° @ ${currentNOAAData[9].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[10].weatherData[i].windDir}° @ ${currentNOAAData[10].weatherData[i].windSpeed}KTs`}</td>
          <td>{`${currentNOAAData[11].weatherData[i].windDir}° @ ${currentNOAAData[11].weatherData[i].windSpeed}KTs`}</td>
        </tr>
      )
    }
  };
  buildRowData();



  // if no NOAA data has been retreived, return an empty div
  if (currentNOAAData.length === 0) {
    return (<div></div>)

  // otherwise render the NOAA data
  } else {
    return (
      <div className="soundingTableContainer">

        <table>
          <tr key="-1">
            <td>NOAA LINK</td>
            <td>{`${currentNOAAData[0].utcDateTime.day}-${currentNOAAData[0].utcDateTime.month} ${currentNOAAData[0].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[1].utcDateTime.day}-${currentNOAAData[1].utcDateTime.month} ${currentNOAAData[1].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[2].utcDateTime.day}-${currentNOAAData[2].utcDateTime.month} ${currentNOAAData[2].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[3].utcDateTime.day}-${currentNOAAData[3].utcDateTime.month} ${currentNOAAData[3].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[4].utcDateTime.day}-${currentNOAAData[4].utcDateTime.month} ${currentNOAAData[4].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[5].utcDateTime.day}-${currentNOAAData[5].utcDateTime.month} ${currentNOAAData[5].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[6].utcDateTime.day}-${currentNOAAData[6].utcDateTime.month} ${currentNOAAData[6].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[7].utcDateTime.day}-${currentNOAAData[7].utcDateTime.month} ${currentNOAAData[7].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[8].utcDateTime.day}-${currentNOAAData[8].utcDateTime.month} ${currentNOAAData[8].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[9].utcDateTime.day}-${currentNOAAData[9].utcDateTime.month} ${currentNOAAData[9].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[10].utcDateTime.day}-${currentNOAAData[10].utcDateTime.month} ${currentNOAAData[10].utcDateTime.hour}:00 UTC`}</td>
            <td>{`${currentNOAAData[11].utcDateTime.day}-${currentNOAAData[11].utcDateTime.month} ${currentNOAAData[11].utcDateTime.hour}:00 UTC`}</td>
          </tr>

          {rowData}

        </table>


      </div>
    )
  }


}

export default SoundingTableContainer;