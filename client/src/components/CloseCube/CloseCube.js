import React from "react";
import {Entity} from 'aframe-react';

const CloseCube = props => (
  <Entity
    parentID={props.id}
    className="clickable"
    geometry={{
      primitive: 'box',
      depth: 0.19,
      height: 0.19,
      width: 0.19
    }}
    position="1.16 0 0.1"
    material={{
      color: 'red',
      opacity: 0.5,
      side: 'double'
    }}
  >
    <Entity
      position="0 0 0.1"
      text={{
        color: 'white',
        align: 'center',
        value: 'x',
        opacity: 1,
        width: 3
      }}
    />
  </Entity>
);

export default CloseCube;