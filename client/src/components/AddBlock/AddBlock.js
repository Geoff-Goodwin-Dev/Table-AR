import React from "react";
import {Entity} from 'aframe-react';

const AddBlock = props => (
    <Entity
      id='addBlock'
      geometry={{
        primitive: 'box',
        depth: 0.5,
        height: 1,
        width: 1
      }}
      position="-2.5 3 -5"
      material={{
        color: 'green',
        opacity: 0.2,
        side: 'double'
      }}
      shadow='receive: true;'
      {...props}
    >
      <Entity
        geometry={{
          primitive: 'box',
          depth: 0.2,
          height: 0.2,
          width: 0.8
        }}
        material={{
          color: 'green',
        }}
        shadow='receive: true;'
      />
      <Entity
        geometry={{
          primitive: 'box',
          depth: 0.2,
          height: 0.8,
          width: 0.2
        }}
        material={{
          color: 'green',
        }}
        shadow='receive: true;'
      />
    </Entity>
);

export default AddBlock;