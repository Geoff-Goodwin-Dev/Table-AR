import React from "react";
import {Entity} from 'aframe-react';

const ToDoListContainer = ({children}) => (
  <Entity
    id='toDoListContainer'
    geometry={{
      primitive: 'box',
      depth: 0.4,
      height: 6,
      width: 3
    }}
    position="0 1 -5"
    material={{
      color: '#222222',
      opacity: 0.3,
      side: 'double'
    }}
    shadow='receive: true;'
  >
    <Entity
      geometry={{
        primitive: 'box',
        depth: 0.3,
        height: 5.9,
        width: 2.9
      }}
      material={{
        color: 'white',
        opacity: 0.3,
        side: 'double'
      }}
    />
    <Entity
      id="toDoListHeader"
      position="0 3.5 0"
      text={{
        color: 'white',
        align: 'center',
        value: 'To Do List:',
        opacity: 1,
        width: 6,
        side: 'double'
      }}
    />
    {children}
  </Entity>
);

export default ToDoListContainer;