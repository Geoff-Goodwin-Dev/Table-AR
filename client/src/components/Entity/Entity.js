import React from "react";
import {Entity} from 'aframe-react';

const EntityElement = props => (
  <Entity
    geometry={{
      primitive: 'box',
      depth: 0.9,
      height: 0.9,
      width: 0.9
    }}
    material={{
      color: '#00786B',
      opacity: 0.6,
      side: 'double'
    }}
    shadow='receive: true;'

    {...props}/>
);

export default EntityElement;