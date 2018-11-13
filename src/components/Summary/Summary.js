import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './Summary.scss';
import {getDate, toPercentage, timeStamp} from '../../utils/helpers'

const Summary = (props) => {

  const currently = props.weather.currently;
  const daily = props.weather.daily;

  return (
    <div className="Summary">
      <h1 className="Summary__location">{props.userCity}, {props.userState}</h1>
      <div className="Row">
        <div className="Col">
          <div className="Summary__info">{getDate(currently.time, props.weather.timezone)}</div>
          <div className="Summary__info">{currently.summary}</div>
          <div className="Summary__conditions">
            <div className="Summary__icon">
              <WeatherIcon icon={currently.icon}/>
            </div>
            <div className="Summary__temperature">{Math.round(currently.apparentTemperature)}
              <sup>&#8451;</sup>
            </div>
          </div>
        </div>
        <div className="Col">
          <ul className="Summary__details">
            <li className="Summary__detail">
              Humidity: <strong>{toPercentage(currently.humidity)}%</strong>
            </li>
            <li className="Summary__detail">
              Cloud Coverage: <strong>{toPercentage(currently.cloudCover)}%</strong>
            </li>
            <li className="Summary__detail">
              Wind: <strong>{Math.round(currently.windSpeed)} m/s</strong>
            </li>
            <li className="Summary__detail">
              Visibility: <strong>{Math.round(currently.visibility)} Km</strong>
            </li>
            <li className="Summary__detail">
              Sunrise: <strong>{timeStamp(daily.data[0].sunriseTime, props.weather.timezone)}</strong>
            </li>
            <li className="Summary__detail">
              Sunset: <strong>{timeStamp(daily.data[0].sunsetTime, props.weather.timezone)}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Summary;
