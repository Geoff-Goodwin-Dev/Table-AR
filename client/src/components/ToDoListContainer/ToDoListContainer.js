import React from "react";
import {Entity} from 'aframe-react';

const ToDoListContainer = ({children}) => (
  <Entity
    id='toDoListContainer'
    geometry={{
      primitive: 'box',
      depth: 0.5,
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
    {children}
  </Entity>
);

export default ToDoListContainer;