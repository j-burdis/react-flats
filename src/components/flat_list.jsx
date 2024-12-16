import React, { Component } from 'react';
import Flat from './flat';
// import { render } from 'sass';

class FlatList extends Component {
  render() {
    const { flats, selectFlat } = this.props;

    return (
      <div className="flat-list">
        {flats.map(flat => (
          <Flat flat={flat} key={flat.name} selectFlat={selectFlat} />
        ))}
      </div>
    );
  }
}

export default FlatList;
