import React from 'react';
// , { Component }
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const Map = ({ center, zoom, selectedFlat }) => (
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

// class Map extends Component {
//   render() {
//     const { center, zoom, selectedFlat } = this.props;

//     return (
//       <div className="map-container">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           {selectedFlat && (
//             <Marker
//               lat={selectedFlat.lat}
//               lng={selectedFlat.lng}
//             />
//           )}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

export default Map;
