import React from 'react';
// , { Component }
import Flat from './flat';
// import { render } from 'sass';

const FlatList = ({ flats, selectFlat }) => (
  <div className="flat-list">
    {flats.map(flat => (
      <Flat flat={flat} key={flat.name} selectFlat={selectFlat} />
    ))}
  </div>
);

// class FlatList extends Component {
//   render() {
//     const { flats, selectFlat } = this.props;

//     return (
//       <div className="flat-list">
//         {flats.map(flat => (
//           <Flat flat={flat} key={flat.name} selectFlat={selectFlat} />
//         ))}
//       </div>
//     );
//   }
// }

export default FlatList;
