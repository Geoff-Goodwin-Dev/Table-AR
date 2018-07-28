import React from 'react';
import { Entity } from 'aframe-react';

export const ToDoListItem = ({id, type, posY, events, text, children}) => (
  <Entity
    id={`${id}`}
    className={(type === 'list' ) ? 'clickable' : 'listItem'}
    geometry={{
      primitive: 'box',
      depth: 0.3,
      height: 0.35,
      width: 2.75
    }}
    position={`0 ${posY} 0.15`}
    material={{
      color: '#00786B',
      opacity: 0.5,
      side: 'double'
    }}
    shadow='receive: true;'
    events={events}
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
      position='0 0 0.175'
        text={{
          color: 'white',
          align: 'left',
          value: text,
          opacity: 1,
          width: 2.65,
          side: 'double'
        }}
    />
    {children}
  </Entity>
);