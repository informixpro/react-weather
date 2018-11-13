import moment from "moment";
import 'moment-timezone';

export const getDate = (unixTime, zone) => {
  return moment(unixTime * 1000).tz(zone).format('dddd, MMMM Do');
}

export const timeStamp = (unixTime, zone) => {
  return moment(unixTime * 1000).tz(zone).format('HH:mm')
}

export const dayOfWeek =  (time, zone) => {
  return moment(time * 1000).tz(zone).format('ddd')
}

export const toPercentage = (value) => {
  return Math.round(value * 100)
}
