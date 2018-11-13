import axios from 'axios';

const _baseURL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
const _APIKEY = '708e69d4da6b335303fa8a46c9935609';

const getForecast = (location) => {
  const url = `${_baseURL}${_APIKEY}/${location.latitude},${location.longitude}?units=si`;

  return axios.get(url)
    .then(
        result => result.data
    )
}

export default getForecast;
