import React, { Component } from 'react';
import WeatherReport from './containers/WeatherReport/WeatherReport'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherReport />
      </div>
    );
  }
}

export default App;
