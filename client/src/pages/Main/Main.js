import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import EntityElement from "../../components/Entity";
import Webcam from "react-user-media";

class Main extends Component {
  state= {
    listItems: [
      {
        itemId: 'one',
        posX: -2,
        posY: 3,
        posZ: -5
      },
      {
        itemId: 'two',
        posX: -2,
        posY: 2,
        posZ: -5
      },
      {
        itemId: 'three',
        posX: -2,
        posY: 1,
        posZ: -5
      },
      {
        itemId: 'four',
        posX: -2,
        posY: 0,
        posZ: -5
      },
      {
        itemId: 'five',
        posX: -1,
        posY: 0,
        posZ: -5
      },
      {
        itemId: 'six',
        posX: 1,
        posY: 1,
        posZ: -5
      },
      {
        itemId: 'seven',
        posX: 1,
        posY: 3,
        posZ: -5
      },
      {
        itemId: 'eight',
        posX: 1,
        posY: 0,
        posZ: -5
      },
      {
        itemId: 'nine',
        posX: 3,
        posY: 3,
        posZ: -5
      },
      {
        itemId: 'ten',
        posX: 4,
        posY: 3,
        posZ: -5
      },
      {
        itemId: 'eleven',
        posX: 5,
        posY: 3,
        posZ: -5
      },
      {
        itemId: 'twelve',
        posX: 5,
        posY: 2,
        posZ: -5
      },
      {
        itemId: 'thirteen',
        posX: 4,
        posY: 1,
        posZ: -5
      },
      {
        itemId: 'fourteen',
        posX: 3,
        posY: 0,
        posZ: -5
      },
      {
        itemId: 'fifteen',
        posX: 4,
        posY: 0,
        posZ: -5
      },
      {
        itemId: 'sixteen',
        posX: 5,
        posY: 0,
        posZ: -5
      },
    ],
  };

  handleClick = (id) => {
    const listItemsArray = this.state.listItems;
    let idToRemove = document.querySelector(`#${id}`);
    idToRemove.parentNode.removeChild(idToRemove);
    console.log('id to remove', idToRemove);
    const result = listItemsArray.find( listItem => listItem.itemId === id );
    const arrayIndex = listItemsArray.indexOf(result);
    // console.log('index of item:', arrayIndex);
    if (arrayIndex > -1) {
      // console.log(result);
      this.state.listItems.splice(arrayIndex, 1);
      console.log(this.state.listItems);
    }
    this.render();
  };

  render () {
    return (
      <div className="text-center">
        <Webcam height="800" width="1000" audio={false} />
        <Scene>
          {/*<Entity primitive="a-sky">*/}
          {/*</Entity>*/}

          <Entity primitive="a-camera">
            <Entity cursor="fuse: true; maxDistance: 30; timeout: 300"
                    position="0 0 -4"
                    geometry="primitive: ring"
                    material="color: orange; shader: flat"
                    scale=".1 .1 .1"
            />
            <EntityElement position={{x: -1, y: 1, z: -4}} />
          </Entity>

          {this.state.listItems.map((listItem) => (
            <EntityElement key={listItem.itemId}
                           id={listItem.itemId}
                           position={{
                             x: listItem.posX,
                             y: listItem.posY,
                             z: listItem.posZ
                           }}
                           events={{
                             click: () => this.handleClick(listItem.itemId)
                           }}
            />
          ))}
        </Scene>
      </div>
    );
  }
}

export default Main;
