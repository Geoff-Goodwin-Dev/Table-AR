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
    {...props}
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
      position="0.2 -0.05 0.25"
        text={{
          color: 'white',
          align: 'left',
          value: props.text,
          opacity: 1,
          width: 3
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
    {/*<Entity*/}
      {/*geometry={{*/}
        {/*primitive: "a-sphere",*/}
        {/*radius: "0.05"*/}
      {/*}}*/}
      {/*position="0.65 0 0.12"*/}
      {/*color="#EF2D5E"*/}
    {/*/>*/}
  </Entity>
);

export default ToDoListItem;