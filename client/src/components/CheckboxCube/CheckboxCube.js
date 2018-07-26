import React from "react";
import {Entity} from 'aframe-react';

const CheckboxCube = props => (
  <Entity
    parentID={props.id}
    className='clickable'
    geometry={{
      primitive: 'box',
      depth: 0.19,
      height: 0.19,
      width: 0.19
    }}
    position="0.85 0 0.1"
    material={{
      color: 'white',
      opacity: 0.5,
      side: 'double'
    }}
    events={{
      click: props.events.click()
    }}
  >
    {props.children}
  </Entity>
);

export default CheckboxCube;