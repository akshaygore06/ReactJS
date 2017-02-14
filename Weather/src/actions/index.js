
import axios from 'axios';
const API_KEY = 'e8203f83a714ad79f8463a4ea6f7d8bb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request :',request);
  return{
    type: FETCH_WEATHER,
    payload: request
  };

};
