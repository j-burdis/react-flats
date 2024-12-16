import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';
import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: null,
      center: { lat: 48.8566, lng: 2.3522 },
      zoom: 12
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
      center: { lat: flat.lat, lng: flat.lng }
    });
  };

  render() {
    const {
      flats: flatsData, selectedFlat, center, zoom
    } = this.state;

    return (
      <div className="app">
        {/* <h1>React Flats</h1> */}
        <FlatList flats={flatsData} selectFlat={this.selectFlat} />
        <Map center={center} zoom={zoom} selectedFlat={selectedFlat} />
      </div>
    );
  }
}

export default App;
