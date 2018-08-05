import React from 'react';
import { Entity } from 'aframe-react';

export const CheckboxCube = ({ id, events, children }) => (
  <Entity parentID={id}
          className='clickable'
          geometry={{
            primitive: 'box',
            depth: 0.19,
            height: 0.19,
            width: 0.19
          }}
          position='.85 0 .1'
          material={{
            color: 'white',
            opacity: 0.5,
            side: 'double'
          }}
          events={{
            click: events.click()
          }} >
          {children}
  </Entity>
);