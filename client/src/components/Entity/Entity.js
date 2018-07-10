import React from "react";
import {Entity} from 'aframe-react';

const EntityElement = props => (
  <Entity geometry={{primitive: 'box'}} material={{color: '#00786B'}} {...props}/>
);

export default EntityElement;