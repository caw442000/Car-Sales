import React from 'react';
import { connect } from 'react-redux' ;

import { buyItem } from '../actions/featureActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {() => props.buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {buyItem})(AdditionalFeature);
