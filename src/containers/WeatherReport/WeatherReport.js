import React, {Component} from 'react';
import Report from '../../components/Report/Report';
import ReportForm from "../../components/ReportForm/ReportForm";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Summary from '../../components/Summary/Summary';
import Forecast from '../../components/Forecast/Forecast';
import Loader from 'react-loaders';
import getForecast from '../../utils/api';
import Footer from '../../components/Footer/Footer'

class WeatherReport extends Component {

  state = {
    location: {
      latitude: 50.087626,
      longitude: 14.422560,
      city: 'Prague',
      state: 'Czechia'
    },
    hasLocation: true,
    isLoaded: false,
    isLoading: false,
    weather: {},
    error: null
  }

  setReportLocation = (newLocation) => {
    this.setState({
      location: {...newLocation},
      hasLocation: true
    });
    this.getWeatherData(newLocation);
  }

  getWeatherData = (location) => {
    this.setState({
      isLoaded: false,
      isLoading: true
    });

    getForecast(location)
        .then((res) => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            weather: res
          });
        })
        .catch(error => {
          this.setState({
            error: error.message,
            isLoaded: true,
            isLoading: false,
          })
        });
  }

  getWeatherDataHandler = () => {
    this.getWeatherData(this.state.location);
  }

  componentDidMount () {
    // TODO: Add browser geolocation
    this.getWeatherData(this.state.location);
  }

  render() {
    let  WeatherView = (
        <div className="Loading">
         {this.state.error && <p>{this.state.error}</p>}
         {this.state.isLoading && <Loader type="line-scale" active />}
        </div>
    )

    if (this.state.isLoaded) {
      WeatherView = (
        <Aux>
          <Summary
              userCity={this.state.location.city}
              userState={this.state.location.state}
              weather={this.state.weather}
          />
          <Forecast weather={this.state.weather}/>
          <Footer
              click={this.getWeatherDataHandler}
              weather={this.state.weather}
          />
        </Aux>
      )
    }

    return (
        <Report>
          <ReportForm setReportLocation={this.setReportLocation}/>
          {WeatherView}
        </Report>
    );
  }
}

export default WeatherReport;

