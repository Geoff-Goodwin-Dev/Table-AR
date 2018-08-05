import React from 'react';
import { Entity } from 'aframe-react';

export const CloseCube = ({id, events}) => (
  <Entity parentID={id}
          className='clickable'
          geometry={{
            primitive: 'box',
            depth: 0.19,
            height: 0.19,
            width: 0.19
          }}
          position='1.16 0 .1'
          material={{
            color: 'red',
            opacity: 0.5,
            side: 'double'
          }}
          events={{
            click: events.click()
          }} >
    <Entity position='0 0 .1'
            text={{
              color: 'white',
              align: 'center',
              value: 'x',
              opacity: 1,
              width: 3
            }} />
  </Entity>
);