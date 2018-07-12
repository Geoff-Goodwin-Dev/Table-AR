import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import EntityElement from "../../components/Entity";
import AddBlock from "../../components/AddBlock"
import ToDoListContainer from "../../components/ToDoListContainer"
import ToDoListItem from "../../components/ToDoListItems"
import Webcam from "react-user-media";


class Main extends Component {
  state= {
    listItemPosY: 3,
    toDoListInputField: '',
    toDoList: [],
    listItems: [
      {
        itemId: 'one',
        posX: -2,
        posY: 3,
        posZ: 5
      },
      {
        itemId: 'two',
        posX: -2,
        posY: 2,
        posZ: 5
      },
      {
        itemId: 'three',
        posX: -2,
        posY: 1,
        posZ: 5
      },
      {
        itemId: 'four',
        posX: -2,
        posY: 0,
        posZ: 5
      },
      {
        itemId: 'five',
        posX: -1,
        posY: 0,
        posZ: 5
      },
      {
        itemId: 'six',
        posX: 1,
        posY: 1,
        posZ: 5
      },
      {
        itemId: 'seven',
        posX: 1,
        posY: 3,
        posZ: 5
      },
      {
        itemId: 'eight',
        posX: 1,
        posY: 0,
        posZ: 5
      },
      {
        itemId: 'nine',
        posX: 3,
        posY: 3,
        posZ: 5
      },
      {
        itemId: 'ten',
        posX: 4,
        posY: 3,
        posZ: 5
      },
      {
        itemId: 'eleven',
        posX: 5,
        posY: 3,
        posZ: 5
      },
      {
        itemId: 'twelve',
        posX: 5,
        posY: 2,
        posZ: 5
      },
      {
        itemId: 'thirteen',
        posX: 4,
        posY: 1,
        posZ: 5
      },
      {
        itemId: 'fourteen',
        posX: 3,
        posY: 0,
        posZ: 5
      },
      {
        itemId: 'fifteen',
        posX: 4,
        posY: 0,
        posZ: 5
      },
      {
        itemId: 'sixteen',
        posX: 5,
        posY: 0,
        posZ: 5
      },
    ],
  };

  handleClick = (id) => {
    const listItemsArray = this.state.listItems;
    const result = listItemsArray.find( listItem => listItem.itemId === id );
    const arrayIndex = listItemsArray.indexOf(result);
    if (arrayIndex > -1) {
      listItemsArray.splice(arrayIndex,1);
      this.setState({listItems: listItemsArray});
      console.log(this.state.listItems);
    }
  };

  handleAddClick = () => {
    console.log("to do list field state value", this.state.toDoListInputField);
    let yPosition = this.state.listItemPosY;
    this.setState({listItemPosY: yPosition - 0.5});
    let length = (this.state.toDoList.length + 1).toString();
    let toDoListArray = this.state.toDoList;
    let newListItem = {
      itemId: length,
      posX: 0,
      posY: this.state.listItemPosY,
      posZ: 0.15,
      text: this.state.toDoListInputField.trim()
    };
    toDoListArray.push(newListItem);
    this.setState({toDoList: toDoListArray, toDoListInputField: ''});
  };

  onChangeText = (e) => {
    this.setState({toDoListInputField: e.target.value});
  };

  render () {
    return (
      <div className="text-center">
        {/*<form>*/}
          <input id="newItemText"
                 onChange={this.onChangeText}
                 maxLength={20}
                 style={{zIndex:3, position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>
          </input>
        {/*</form>*/}

        <Webcam height="80%" width="95%" audio={false} style={{zIndex:-5, overflow:'hidden'}}/>
        <Scene>
          {/*<Entity primitive="a-sky" />*/}

          <Entity primitive="a-camera">
            <Entity cursor="fuse: true; maxDistance: 30; timeout: 200"
                    position="0 0 -1"
                    geometry="primitive: ring"
                    material="color: orange"
                    scale=".01 .01 .01"
            />
          </Entity>

          <AddBlock
            events={{
              click: () => this.handleAddClick('#addBlock')
            }}
          />

          <ToDoListContainer>
            {/*This is where the list items get added*/}
            {this.state.toDoList.map((listItem) => (
              <ToDoListItem key={listItem.itemId}
                             id={listItem.itemId}
                             position={{
                               x: listItem.posX,
                               y: listItem.posY,
                               z: listItem.posZ
                             }}
                             text={listItem.text}
              />
            ))}
          </ToDoListContainer>

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
