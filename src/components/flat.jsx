import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, flat } = this.props;
    selectFlat(flat);
  };

  handleKeyUp = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      this.handleClick();
    }
  };

  render() {
    const { flat } = this.props;
    const { name, imageUrl, price } = flat;

    return (
      <div
        className="card"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex="0"
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
