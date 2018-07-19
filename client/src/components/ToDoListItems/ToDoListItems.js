import React from "react";
import {Entity} from 'aframe-react';

const ToDoListItem = props => (
  <Entity
    id={`${props.id}`}
    className={(props.type === 'list' ) ? 'clickable' : 'listItem'}
    geometry={{
      primitive: 'box',
      depth: 0.3,
      height: 0.35,
      width: 2.75
    }}
    position={`0 ${props.posY} 0.15`}
    material={{
      color: '#00786B',
      opacity: 0.5,
      side: 'double'
    }}
    shadow='receive: true;'
    events={{
      click: props.events.click()
    }}

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
    {props.children}
  </Entity>
);

export default ToDoListItem;