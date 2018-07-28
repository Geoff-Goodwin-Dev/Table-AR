import React from 'react';
import { Entity } from 'aframe-react';

export const CameraCursor = ({children}) => (
  <Entity
    primitive='a-camera'
    wasd-controls-enabled='false'
  >
    <Entity
      cursor={{fuse: true, fuseTimeout: 500}}
      raycaster={{objects: '.clickable', far: 30}}
      position='0 0 -2'
      geometry='primitive: ring'
      material='color: orange'
      scale='.06 .06 .06'
      animation__scale={{
        property: 'scale',
        dur: 500,
        dir: 'alternate',
        loop: 2,
        easing: 'easeInCirc',
        startEvents: 'fusing',
        to: ' .01 .01 .01',
      }}
    />
    <Entity
      cursor={{
        rayOrigin: 'mouse'
      }}
    />
    {children}
  </Entity>
);