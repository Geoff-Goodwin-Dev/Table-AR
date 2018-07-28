import React from 'react';
import { Entity } from 'aframe-react';

export const EntityElement = props => (
  <Entity
    className='clickable'
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
    {...props}
  />
);