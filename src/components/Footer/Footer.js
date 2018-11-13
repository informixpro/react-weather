import React from 'react';
import {timeStamp} from '../../utils/helpers';
import {ReactComponent  as IconRefresh} from '../../assets/icons/ui/refresh.svg'
import './Footer.scss'

const Footer = (props) => {
  return (
    <div className="Footer">
      {props.weather.currently  && (
        <button className="Footer__link" onClick={props.click}>
          <IconRefresh />
          <span>Last updated: {timeStamp(props.weather.currently.time, props.weather.timezone)}</span>
        </button>
      )}
    </div>
  );
};

export default Footer;
