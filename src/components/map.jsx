import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
  render() {
    const { center, zoom, selectedFlat } = this.props;

    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {selectedFlat && (
            <Marker
              lat={selectedFlat.lat}
              lng={selectedFlat.lng}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
