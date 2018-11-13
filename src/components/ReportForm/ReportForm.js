import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import './ReportForm.scss'
import {ReactComponent  as IconSearch} from '../../assets/icons/ui/search.svg'

class ReportForm extends React.Component {

  state = {
    city: '',
    state: '',
    latitude: null,
    longitude: null,
    isLocationLoaded: false,
  }

  setFormLocation = (location) => {
    let parsedLoc = location.address.split(', ')
    this.setState({
      city: parsedLoc[0],
      state: parsedLoc[1],
      latitude: location.latitude,
      longitude: location.longitude,
      isLocationLoaded: location.isLocationLoaded
    })
  }

  createReportLocation = (e) => {
    e.preventDefault()
    const inputLocation = {
      city: this.state.city,
      state: this.state.state,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    this.props.setReportLocation(inputLocation);
  }

  render(){
    return (
      <form onSubmit={this.createReportLocation} className="Form__container">
        <SearchBar setFormLocation={this.setFormLocation}/>
        <button type="submit" className="Form__button" disabled={!this.state.isLocationLoaded}>
          <IconSearch/>
        </button>
      </form>
    )
  }
}

export default ReportForm;
