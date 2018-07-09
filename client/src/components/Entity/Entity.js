import React from "react";
import {Entity} from 'aframe-react';

const EntityElement = props => (
  <Entity geometry={{primitive: 'box'}} material={{color: 'green'}} {...props}/>
);

export default EntityElement;