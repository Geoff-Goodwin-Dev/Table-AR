import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import EntityElement from "../../components/Entity";
import React from 'react';

class Aframe extends React.Component {
  handleClick = () => {
    let hotdogs = document.querySelector('#mrpoopiebutthole');
    hotdogs.parentNode.removeChild(hotdogs);
  };

  render () {
    return (
      <Scene>
        {/*<Entity primitive="a-sky" color="black" position="0 0 -5"/>*/}
        <Entity primitive="a-camera">
          <Entity cursor="fuse: true; maxDistance: 30; timeout: 500"
          position="0 0 -4"
          geometry="primitive: ring"
          material="color: orange; shader: flat"
          scale=".1 .1 .1" />
          <EntityElement position={{x: -1, y: 1, z: -4}} />
        </Entity>
        <EntityElement id={"mrpoopiebutthole"} position={{x: -2, y: 3, z: -5}} events={{
          click: this.handleClick
        }} />
        <EntityElement position={{x: -2, y: 2, z: -5}} />
        <EntityElement position={{x: -2, y: 1, z: -5}} />
        <EntityElement position={{x: -2, y: 0, z: -5}} />
        <EntityElement position={{x: -1, y: 0, z: -5}} />
        <EntityElement position={{x: 1, y: 1, z: -5}} />
        <EntityElement position={{x: 1, y: 3, z: -5}} />
        <EntityElement position={{x: 1, y: 0, z: -5}} />
        <EntityElement position={{x: 3, y: 3, z: -5}} />
        <EntityElement position={{x: 4, y: 3, z: -5}} />
        <EntityElement position={{x: 5, y: 3, z: -5}} />
        <EntityElement position={{x: 5, y: 2, z: -5}} />
        <EntityElement position={{x: 4, y: 1, z: -5}} />
        <EntityElement position={{x: 3, y: 0, z: -5}} />
        <EntityElement position={{x: 4, y: 0, z: -5}} />
        <EntityElement position={{x: 5, y: 0, z: -5}} />
      </Scene>
    );
  }
}

export default Aframe;