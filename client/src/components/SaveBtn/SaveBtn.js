import React from 'react';
import { Entity } from 'aframe-react';

export const SaveBtn = ({disabled, position, events}) => (
  <Entity
    className='clickable'
    disabled={disabled}
    primitive='a-button'
    scale='.6 .6 .6'
    position={position}
    width='1.25'
    value='save'
    type='raised'
    button-color='green'
    events={events}
  />
);