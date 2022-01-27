// import modules
import React, {useState, useContext, useEffect} from 'react';
import GlobalContext from '../contexts/index.jsx';
import LocationSelectForm from './LocationSelectForm.jsx';
import SoundingTableContainer from './SoundingTableContainer.jsx';



const App = () => {


  // random data for formatting table css without having to make GET request every time
  let sampleData = [
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '06' },
      weatherData: [
        { altitude: 1609, windDir: 115, windSpeed: 3 },
        { altitude: 1635, windDir: 135, windSpeed: 6 },
        { altitude: 1682, windDir: 150, windSpeed: 11 },
        { altitude: 1758, windDir: 150, windSpeed: 12 },
        { altitude: 1868, windDir: 139, windSpeed: 9 },
        { altitude: 2010, windDir: 129, windSpeed: 7 },
        { altitude: 2178, windDir: 97, windSpeed: 4 },
        { altitude: 2366, windDir: 60, windSpeed: 3 },
        { altitude: 2573, windDir: 271, windSpeed: 1 },
        { altitude: 2804, windDir: 269, windSpeed: 5 },
        { altitude: 3045, windDir: 278, windSpeed: 6 },
        { altitude: 3062, windDir: 279, windSpeed: 6 },
        { altitude: 3348, windDir: 284, windSpeed: 4 },
        { altitude: 3667, windDir: 300, windSpeed: 3 },
        { altitude: 4021, windDir: 309, windSpeed: 5 },
        { altitude: 4415, windDir: 306, windSpeed: 10 },
        { altitude: 4857, windDir: 304, windSpeed: 17 },
        { altitude: 5342, windDir: 296, windSpeed: 24 },
        { altitude: 5561, windDir: 293, windSpeed: 27 },
        { altitude: 5848, windDir: 288, windSpeed: 32 },
        { altitude: 6349, windDir: 282, windSpeed: 40 },
        { altitude: 6835, windDir: 279, windSpeed: 44 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '07' },
      weatherData: [
        { altitude: 1609, windDir: 164, windSpeed: 4 },
        { altitude: 1635, windDir: 166, windSpeed: 7 },
        { altitude: 1682, windDir: 168, windSpeed: 13 },
        { altitude: 1758, windDir: 170, windSpeed: 15 },
        { altitude: 1868, windDir: 172, windSpeed: 12 },
        { altitude: 2010, windDir: 179, windSpeed: 10 },
        { altitude: 2178, windDir: 201, windSpeed: 7 },
        { altitude: 2365, windDir: 236, windSpeed: 6 },
        { altitude: 2572, windDir: 269, windSpeed: 7 },
        { altitude: 2802, windDir: 284, windSpeed: 8 },
        { altitude: 3048, windDir: 289, windSpeed: 10 },
        { altitude: 3060, windDir: 289, windSpeed: 10 },
        { altitude: 3347, windDir: 290, windSpeed: 10 },
        { altitude: 3665, windDir: 290, windSpeed: 9 },
        { altitude: 4019, windDir: 291, windSpeed: 10 },
        { altitude: 4413, windDir: 294, windSpeed: 13 },
        { altitude: 4854, windDir: 295, windSpeed: 15 },
        { altitude: 5338, windDir: 289, windSpeed: 20 },
        { altitude: 5559, windDir: 285, windSpeed: 24 },
        { altitude: 5843, windDir: 281, windSpeed: 28 },
        { altitude: 6342, windDir: 276, windSpeed: 38 },
        { altitude: 6827, windDir: 272, windSpeed: 45 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '08' },
      weatherData: [
        { altitude: 1609, windDir: 155, windSpeed: 4 },
        { altitude: 1635, windDir: 167, windSpeed: 8 },
        { altitude: 1682, windDir: 172, windSpeed: 14 },
        { altitude: 1758, windDir: 174, windSpeed: 16 },
        { altitude: 1868, windDir: 181, windSpeed: 14 },
        { altitude: 2009, windDir: 196, windSpeed: 11 },
        { altitude: 2178, windDir: 226, windSpeed: 8 },
        { altitude: 2365, windDir: 265, windSpeed: 8 },
        { altitude: 2572, windDir: 284, windSpeed: 9 },
        { altitude: 2802, windDir: 290, windSpeed: 10 },
        { altitude: 3045, windDir: 293, windSpeed: 11 },
        { altitude: 3059, windDir: 293, windSpeed: 11 },
        { altitude: 3345, windDir: 292, windSpeed: 12 },
        { altitude: 3663, windDir: 291, windSpeed: 12 },
        { altitude: 4015, windDir: 290, windSpeed: 13 },
        { altitude: 4409, windDir: 288, windSpeed: 15 },
        { altitude: 4850, windDir: 286, windSpeed: 17 },
        { altitude: 5334, windDir: 284, windSpeed: 21 },
        { altitude: 5551, windDir: 282, windSpeed: 24 },
        { altitude: 5838, windDir: 280, windSpeed: 27 },
        { altitude: 6336, windDir: 276, windSpeed: 36 },
        { altitude: 6820, windDir: 272, windSpeed: 44 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '09' },
      weatherData: [
        { altitude: 1609, windDir: 163, windSpeed: 5 },
        { altitude: 1635, windDir: 166, windSpeed: 9 },
        { altitude: 1682, windDir: 171, windSpeed: 14 },
        { altitude: 1758, windDir: 176, windSpeed: 17 },
        { altitude: 1868, windDir: 186, windSpeed: 15 },
        { altitude: 2010, windDir: 205, windSpeed: 12 },
        { altitude: 2178, windDir: 236, windSpeed: 9 },
        { altitude: 2365, windDir: 269, windSpeed: 9 },
        { altitude: 2572, windDir: 285, windSpeed: 10 },
        { altitude: 2802, windDir: 294, windSpeed: 10 },
        { altitude: 3037, windDir: 297, windSpeed: 11 },
        { altitude: 3059, windDir: 297, windSpeed: 11 },
        { altitude: 3344, windDir: 297, windSpeed: 13 },
        { altitude: 3661, windDir: 295, windSpeed: 14 },
        { altitude: 4013, windDir: 293, windSpeed: 15 },
        { altitude: 4406, windDir: 291, windSpeed: 16 },
        { altitude: 4846, windDir: 289, windSpeed: 20 },
        { altitude: 5329, windDir: 286, windSpeed: 26 },
        { altitude: 5542, windDir: 284, windSpeed: 29 },
        { altitude: 5832, windDir: 282, windSpeed: 33 },
        { altitude: 6329, windDir: 277, windSpeed: 39 },
        { altitude: 6812, windDir: 272, windSpeed: 45 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '10' },
      weatherData: [
        { altitude: 1609, windDir: 157, windSpeed: 5 },
        { altitude: 1635, windDir: 163, windSpeed: 8 },
        { altitude: 1682, windDir: 170, windSpeed: 13 },
        { altitude: 1758, windDir: 177, windSpeed: 14 },
        { altitude: 1868, windDir: 192, windSpeed: 12 },
        { altitude: 2010, windDir: 228, windSpeed: 9 },
        { altitude: 2179, windDir: 271, windSpeed: 10 },
        { altitude: 2366, windDir: 293, windSpeed: 14 },
        { altitude: 2573, windDir: 303, windSpeed: 16 },
        { altitude: 2803, windDir: 308, windSpeed: 17 },
        { altitude: 3051, windDir: 312, windSpeed: 18 },
        { altitude: 3061, windDir: 312, windSpeed: 18 },
        { altitude: 3347, windDir: 313, windSpeed: 18 },
        { altitude: 3664, windDir: 311, windSpeed: 17 },
        { altitude: 4016, windDir: 306, windSpeed: 17 },
        { altitude: 4409, windDir: 300, windSpeed: 18 },
        { altitude: 4848, windDir: 294, windSpeed: 20 },
        { altitude: 5331, windDir: 287, windSpeed: 26 },
        { altitude: 5552, windDir: 284, windSpeed: 29 },
        { altitude: 5835, windDir: 281, windSpeed: 33 },
        { altitude: 6332, windDir: 276, windSpeed: 38 },
        { altitude: 6815, windDir: 273, windSpeed: 44 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '11' },
      weatherData: [
        { altitude: 1609, windDir: 136, windSpeed: 4 },
        { altitude: 1635, windDir: 147, windSpeed: 8 },
        { altitude: 1682, windDir: 160, windSpeed: 12 },
        { altitude: 1758, windDir: 170, windSpeed: 12 },
        { altitude: 1868, windDir: 187, windSpeed: 8 },
        { altitude: 2011, windDir: 257, windSpeed: 4 },
        { altitude: 2179, windDir: 305, windSpeed: 8 },
        { altitude: 2367, windDir: 316, windSpeed: 13 },
        { altitude: 2573, windDir: 319, windSpeed: 16 },
        { altitude: 2804, windDir: 319, windSpeed: 18 },
        { altitude: 3056, windDir: 321, windSpeed: 19 },
        { altitude: 3061, windDir: 321, windSpeed: 19 },
        { altitude: 3347, windDir: 322, windSpeed: 19 },
        { altitude: 3664, windDir: 322, windSpeed: 18 },
        { altitude: 4016, windDir: 318, windSpeed: 17 },
        { altitude: 4408, windDir: 308, windSpeed: 17 },
        { altitude: 4847, windDir: 295, windSpeed: 20 },
        { altitude: 5329, windDir: 285, windSpeed: 27 },
        { altitude: 5553, windDir: 282, windSpeed: 31 },
        { altitude: 5832, windDir: 279, windSpeed: 35 },
        { altitude: 6329, windDir: 275, windSpeed: 40 },
        { altitude: 6812, windDir: 273, windSpeed: 44 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '12' },
      weatherData: [
        { altitude: 1609, windDir: 74, windSpeed: 3 },
        { altitude: 1635, windDir: 87, windSpeed: 5 },
        { altitude: 1681, windDir: 109, windSpeed: 7 },
        { altitude: 1757, windDir: 136, windSpeed: 7 },
        { altitude: 1867, windDir: 139, windSpeed: 4 },
        { altitude: 2009, windDir: 54, windSpeed: 2 },
        { altitude: 2177, windDir: 2, windSpeed: 5 },
        { altitude: 2364, windDir: 354, windSpeed: 9 },
        { altitude: 2571, windDir: 349, windSpeed: 11 },
        { altitude: 2800, windDir: 341, windSpeed: 13 },
        { altitude: 3049, windDir: 334, windSpeed: 16 },
        { altitude: 3057, windDir: 334, windSpeed: 16 },
        { altitude: 3342, windDir: 328, windSpeed: 17 },
        { altitude: 3658, windDir: 324, windSpeed: 18 },
        { altitude: 4009, windDir: 320, windSpeed: 18 },
        { altitude: 4400, windDir: 315, windSpeed: 17 },
        { altitude: 4837, windDir: 304, windSpeed: 19 },
        { altitude: 5317, windDir: 291, windSpeed: 25 },
        { altitude: 5538, windDir: 288, windSpeed: 29 },
        { altitude: 5818, windDir: 284, windSpeed: 34 },
        { altitude: 6313, windDir: 278, windSpeed: 41 },
        { altitude: 6794, windDir: 274, windSpeed: 45 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '13' },
      weatherData: [
        { altitude: 1609, windDir: 349, windSpeed: 5 },
        { altitude: 1635, windDir: 4, windSpeed: 8 },
        { altitude: 1681, windDir: 29, windSpeed: 9 },
        { altitude: 1756, windDir: 58, windSpeed: 9 },
        { altitude: 1864, windDir: 81, windSpeed: 8 },
        { altitude: 2005, windDir: 92, windSpeed: 5 },
        { altitude: 2172, windDir: 73, windSpeed: 4 },
        { altitude: 2359, windDir: 40, windSpeed: 5 },
        { altitude: 2565, windDir: 23, windSpeed: 7 },
        { altitude: 2794, windDir: 14, windSpeed: 10 },
        { altitude: 3049, windDir: 6, windSpeed: 12 },
        { altitude: 3049, windDir: 6, windSpeed: 12 },
        { altitude: 3333, windDir: 359, windSpeed: 13 },
        { altitude: 3648, windDir: 343, windSpeed: 15 },
        { altitude: 3997, windDir: 328, windSpeed: 17 },
        { altitude: 4387, windDir: 316, windSpeed: 19 },
        { altitude: 4823, windDir: 306, windSpeed: 21 },
        { altitude: 5302, windDir: 295, windSpeed: 25 },
        { altitude: 5525, windDir: 291, windSpeed: 28 },
        { altitude: 5801, windDir: 286, windSpeed: 31 },
        { altitude: 6294, windDir: 280, windSpeed: 38 },
        { altitude: 6774, windDir: 274, windSpeed: 42 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '14' },
      weatherData: [
        { altitude: 1609, windDir: 338, windSpeed: 4 },
        { altitude: 1635, windDir: 349, windSpeed: 8 },
        { altitude: 1681, windDir: 8, windSpeed: 12 },
        { altitude: 1756, windDir: 18, windSpeed: 13 },
        { altitude: 1864, windDir: 34, windSpeed: 11 },
        { altitude: 2004, windDir: 57, windSpeed: 9 },
        { altitude: 2170, windDir: 70, windSpeed: 7 },
        { altitude: 2355, windDir: 71, windSpeed: 6 },
        { altitude: 2560, windDir: 53, windSpeed: 4 },
        { altitude: 2789, windDir: 26, windSpeed: 5 },
        { altitude: 3044, windDir: 18, windSpeed: 8 },
        { altitude: 3064, windDir: 18, windSpeed: 8 },
        { altitude: 3328, windDir: 18, windSpeed: 11 },
        { altitude: 3642, windDir: 9, windSpeed: 12 },
        { altitude: 3991, windDir: 344, windSpeed: 12 },
        { altitude: 4380, windDir: 319, windSpeed: 16 },
        { altitude: 4816, windDir: 304, windSpeed: 21 },
        { altitude: 5294, windDir: 293, windSpeed: 27 },
        { altitude: 5529, windDir: 289, windSpeed: 30 },
        { altitude: 5793, windDir: 285, windSpeed: 34 },
        { altitude: 6287, windDir: 279, windSpeed: 39 },
        { altitude: 6767, windDir: 275, windSpeed: 43 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '15' },
      weatherData: [
        { altitude: 1609, windDir: 351, windSpeed: 4 },
        { altitude: 1635, windDir: 0, windSpeed: 7 },
        { altitude: 1680, windDir: 15, windSpeed: 13 },
        { altitude: 1755, windDir: 20, windSpeed: 19 },
        { altitude: 1863, windDir: 19, windSpeed: 25 },
        { altitude: 2002, windDir: 20, windSpeed: 28 },
        { altitude: 2167, windDir: 21, windSpeed: 26 },
        { altitude: 2351, windDir: 21, windSpeed: 21 },
        { altitude: 2554, windDir: 21, windSpeed: 16 },
        { altitude: 2781, windDir: 28, windSpeed: 10 },
        { altitude: 3035, windDir: 48, windSpeed: 5 },
        { altitude: 3068, windDir: 50, windSpeed: 5 },
        { altitude: 3319, windDir: 66, windSpeed: 2 },
        { altitude: 3633, windDir: 45, windSpeed: 2 },
        { altitude: 3983, windDir: 33, windSpeed: 3 },
        { altitude: 4373, windDir: 321, windSpeed: 6 },
        { altitude: 4809, windDir: 296, windSpeed: 15 },
        { altitude: 5288, windDir: 289, windSpeed: 25 },
        { altitude: 5529, windDir: 286, windSpeed: 29 },
        { altitude: 5788, windDir: 283, windSpeed: 33 },
        { altitude: 6282, windDir: 280, windSpeed: 37 },
        { altitude: 6761, windDir: 278, windSpeed: 41 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '16' },
      weatherData: [
        { altitude: 1609, windDir: 2, windSpeed: 9 },
        { altitude: 1635, windDir: 2, windSpeed: 11 },
        { altitude: 1680, windDir: 3, windSpeed: 13 },
        { altitude: 1755, windDir: 6, windSpeed: 16 },
        { altitude: 1863, windDir: 10, windSpeed: 20 },
        { altitude: 2001, windDir: 15, windSpeed: 24 },
        { altitude: 2166, windDir: 18, windSpeed: 27 },
        { altitude: 2349, windDir: 20, windSpeed: 27 },
        { altitude: 2552, windDir: 22, windSpeed: 25 },
        { altitude: 2778, windDir: 18, windSpeed: 22 },
        { altitude: 3031, windDir: 5, windSpeed: 18 },
        { altitude: 3073, windDir: 3, windSpeed: 17 },
        { altitude: 3313, windDir: 352, windSpeed: 12 },
        { altitude: 3627, windDir: 324, windSpeed: 4 },
        { altitude: 3977, windDir: 239, windSpeed: 3 },
        { altitude: 4367, windDir: 217, windSpeed: 4 },
        { altitude: 4804, windDir: 262, windSpeed: 6 },
        { altitude: 5283, windDir: 283, windSpeed: 16 },
        { altitude: 5528, windDir: 283, windSpeed: 21 },
        { altitude: 5781, windDir: 284, windSpeed: 26 },
        { altitude: 6274, windDir: 280, windSpeed: 32 },
        { altitude: 6752, windDir: 276, windSpeed: 36 }
      ]
    },
    {
      utcDateTime: { year: '2022', month: 'Jan', day: '27', hour: '17' },
      weatherData: [
        { altitude: 1609, windDir: 8, windSpeed: 9 },
        { altitude: 1635, windDir: 8, windSpeed: 11 },
        { altitude: 1681, windDir: 8, windSpeed: 13 },
        { altitude: 1755, windDir: 9, windSpeed: 14 },
        { altitude: 1863, windDir: 11, windSpeed: 17 },
        { altitude: 2002, windDir: 12, windSpeed: 20 },
        { altitude: 2166, windDir: 15, windSpeed: 23 },
        { altitude: 2349, windDir: 16, windSpeed: 25 },
        { altitude: 2551, windDir: 17, windSpeed: 26 },
        { altitude: 2776, windDir: 18, windSpeed: 26 },
        { altitude: 3029, windDir: 20, windSpeed: 24 },
        { altitude: 3075, windDir: 20, windSpeed: 23 },
        { altitude: 3310, windDir: 18, windSpeed: 18 },
        { altitude: 3622, windDir: 2, windSpeed: 14 },
        { altitude: 3970, windDir: 330, windSpeed: 8 },
        { altitude: 4359, windDir: 254, windSpeed: 6 },
        { altitude: 4795, windDir: 230, windSpeed: 7 },
        { altitude: 5274, windDir: 266, windSpeed: 11 },
        { altitude: 5522, windDir: 273, windSpeed: 15 },
        { altitude: 5773, windDir: 280, windSpeed: 20 },
        { altitude: 6265, windDir: 278, windSpeed: 27 },
        { altitude: 6742, windDir: 273, windSpeed: 32 }
      ]
    },
  ]




  // local state variables
  const [currentLatLong, setCurrentLatLong] = useState('');
  const [currentNOAAData, setCurrentNOAAData] = useState(sampleData);

  return (
    <div>
      <h1>Sky High Weather</h1>

      <GlobalContext.Provider value={ {
        currentLatLong, setCurrentLatLong,
        currentNOAAData, setCurrentNOAAData,
      }}>
        <LocationSelectForm />
        <SoundingTableContainer />
      </GlobalContext.Provider>

    </div>
  )

}



export default App;