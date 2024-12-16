import React, { Component } from 'react';
import flats from '../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: null
    };
  }

  render() {
    return (
      <div>
        <h1>React Flats</h1>
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        {/* <div className="flat-list-container">
          <FlatList />
        </div>
        <div className="map-container">Map Here</div> */}
      </div>
    );
  }
}

export default App;
