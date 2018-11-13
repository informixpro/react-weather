import React from 'react';
import './Forecast.scss'
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import {dayOfWeek} from '../../utils/helpers';

const Forecast = (props) => {
  let days = props.weather.daily.data
      .map((day, i) => {
        return (
            <div className="Forecast__day" key={i}>
              <div>{ dayOfWeek(day.time, props.weather.timezone) }</div>
              <div className="Forecast__icon">
                <WeatherIcon icon={day.icon}/>
              </div>
              <strong>{ Math.round(day.temperatureMax) }°</strong>/{ Math.round(day.temperatureMin) }°
            </div>
        )
    });

  return (
      <div className="Forecast">
        {days}
      </div>
  );
};

export default Forecast;
