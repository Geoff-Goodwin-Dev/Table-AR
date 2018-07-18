import React from "react";
import {Entity} from 'aframe-react';

const SaveBtn = props => (
  <Entity
    className='clickable'
    disabled={props.disabled}
    primitive="a-button"
    scale="0.6 0.6 0.6"
    position={props.position}
    width="1.25"
    value="save"
    type="raised"
    button-color="green"
    events={props.events}
  />
);

export default SaveBtn;