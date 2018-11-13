import React from 'react';
import './WeatherIcon.scss';

import {ReactComponent  as ClearDay} from '../../assets/icons/weather/clear-day.svg';
import {ReactComponent  as ClearNight} from '../../assets/icons/weather/clear-night.svg';
import {ReactComponent  as Rain} from '../../assets/icons/weather/rain.svg';
import {ReactComponent  as Snow} from '../../assets/icons/weather/snow.svg';
import {ReactComponent  as Sleet} from '../../assets/icons/weather/sleet.svg';
import {ReactComponent  as Wind} from '../../assets/icons/weather/wind.svg';
import {ReactComponent  as Fog} from '../../assets/icons/weather/fog.svg';
import {ReactComponent  as Cloudy} from '../../assets/icons/weather/cloudy.svg';
import {ReactComponent  as PartlyCloudyDay} from '../../assets/icons/weather/partly-cloudy-day.svg';
import {ReactComponent  as PartlyCloudyNight} from '../../assets/icons/weather/partly-cloudy-night.svg';

const WeatherIcon = (props) => {
    let icon = null;
    switch(props.icon){
        case('clear-day'):
            icon = <ClearDay />;
            break;
        case('clear-night'):
            icon = <ClearNight />;
            break;
        case('rain'):
            icon = <Rain />;
            break;
        case('snow'):
            icon = <Snow />;
            break;
        case('sleet'):
            icon = <Sleet />;
            break;
        case('wind'):
            icon = <Wind />;
            break;
        case('fog'):
            icon = <Fog />;
            break;
        case('cloudy'):
            icon = <Cloudy />;
            break;
        case('partly-cloudy-day'):
            icon = <PartlyCloudyDay />;
            break;
        case('partly-cloudy-night'):
            icon = <PartlyCloudyNight />;
            break;
        default:
            icon = null;
            break;
    }

    return (
        <div className="WeatherIcon">
            {icon}
        </div>
    )
};

export default WeatherIcon;
