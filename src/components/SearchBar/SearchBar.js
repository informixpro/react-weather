import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './SearchBar.scss';
import { classnames } from './helpers';

class SearchBar extends React.Component {

  state = {
    address: '',
    errorMessage: '',
    latitude: null,
    longitude: null,
    isGeocoding: false,
  };

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    const setFormLocation = this.props.setFormLocation;
    geocodeByAddress(selected)
        .then(res => getLatLng(res[0])
        )
        .then(({ lat, lng }) => {
          this.setState({
            latitude: lat,
            longitude: lng,
            isGeocoding: false,
          });
          setFormLocation({
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            isLocationLoaded: !this.state.isGeocoding
          });
        })
        .catch(error => {
          this.setState({ isGeocoding: false });
          console.log('error', error);
        });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status);
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const {
      address,
      errorMessage,
    } = this.state;

    return (
      <Aux>
        <PlacesAutocomplete
            onChange={this.handleChange}
            value={address}
            onSelect={this.handleSelect}
            onError={this.handleError}
            shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            const className = classnames('Bar__search-input', {
              'Bar__serach-input--danger': errorMessage.length > 0,
            });
            return (
                <div className="Bar__search-bar-container">
                  <div className="Bar__search-input-container">
                    <input
                        {...getInputProps({
                          placeholder: 'Search Places...',
                          //className: 'Bar__search-input',
                          className: className,
                        })}
                    />
                    {this.state.address.length > 0 && (
                        <button
                            className="Bar__clear-button"
                            onClick={this.handleCloseClick}
                        >
                          x
                        </button>
                    )}
                  </div>
                  {suggestions.length > 0 && (
                      <div className="Bar__autocomplete-container">
                        {suggestions.map(suggestion => {
                          const className = classnames('Bar__suggestion-item', {
                            'Bar__suggestion-item--active': suggestion.active,
                          });

                          return (
                              /* eslint-disable react/jsx-key */
                              <div
                                  {...getSuggestionItemProps(suggestion, { className })}
                              >
                                <strong>
                                  {suggestion.formattedSuggestion.mainText}
                                </strong>{' '}
                                <small>
                                  {suggestion.formattedSuggestion.secondaryText}
                                </small>
                              </div>
                          );
                          /* eslint-enable react/jsx-key */
                        })}
                      </div>
                  )}
                </div>
            );
          }}
        </PlacesAutocomplete>
      </Aux>
    );
  }
}

export default SearchBar;
