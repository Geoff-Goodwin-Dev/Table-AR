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
    <Entity id="toDoListHeader"
            position="0 3.25 0"
            text={{
              color: 'white',
              align: 'center',
              value: 'To Do List:',
              opacity: 1,
              width: 6
            }}
    />
    {children}
  </Entity>
);

export default ToDoListContainer;