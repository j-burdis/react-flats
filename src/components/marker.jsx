import React, { Component } from 'react';

class Marker extends Component {
  render() {
		return (
			<div
				className="marker"
				style={{
          height: '20px',
          width: '20px',
          backgroundColor: 'red',
          borderRadius: '50%'
				}}
			/>
		);
	}
}

export default Marker;
