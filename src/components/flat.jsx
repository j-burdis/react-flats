import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, flat } = this.props;
    selectFlat(flat);
  };

  render() {
    const { name, imageUrl, price } = this.props.flat;

    return (
      <div
        className="card"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {price}
          EUR
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
