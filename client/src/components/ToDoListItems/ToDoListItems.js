import React from "react";
import {Entity} from 'aframe-react';

const ToDoListItem = props => (
  <Entity
    id={`listItem${props.id}`}
    geometry={{
      primitive: 'box',
      depth: 0.3,
      height: 0.35,
      width: 2.75
    }}
    position="0 2.5 0.15"
    material={{
      color: '#00786B',
      opacity: 0.5,
      side: 'double'
    }}
    shadow='receive: true;'
  >
    <Entity
      geometry={{
        primitive: 'box',
        depth: 0.2,
        height: 0.2,
        width: 2.6
      }}
      material={{
        color: 'white',
        opacity: 0.5,
        side: 'double'
      }}
    />
    <Entity
      position="0 0 0.175"
        text={{
          color: 'white',
          align: 'left',
          value: props.text,
          opacity: 1,
          width: 2.65,
          side: 'double'
        }}
    />
    <Entity
      geometry={{
        primitive: 'box',
        depth: 0.19,
        height: 0.19,
        width: 0.19
      }}
      position="1.15 0 0.1"
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
  </Entity>
);

export default ToDoListItem;