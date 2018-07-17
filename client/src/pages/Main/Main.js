import React, { Component } from "react";
// import 'aframe';
import 'aframe-animation-component';
import 'aframe-material-snickell';
import {Entity, Scene} from 'aframe-react';
import CameraCursor from "../../components/CameraCursor";
import EntityElement from "../../components/Entity";
import AddBlock from "../../components/AddBlock";
import ToDoListContainer from "../../components/ToDoListContainer";
import ToDoListItem from "../../components/ToDoListItems";
// import Webcam from "react-user-media";

let textValue = '';
let counter = 0;

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
    let toDoListInput = document.querySelector('#toDoItemInputField');
    toDoListInput.blur();
    counter++;
    console.log('counter:', counter);
    let toDoListArray = this.state.toDoList;
    let newListItem = {
      itemId: counter,
      posY: this.state.listItemPosY - 0.5,
      text: textValue.trim()
    };
    toDoListArray.push(newListItem);
    toDoListInput.value = '';
    this.setState({toDoList: toDoListArray, toDoListInputField: '', listItemPosY: this.state.listItemPosY - 0.5});
  };

  onChangeText = (text) => {
    console.log(text);
    this.setState({toDoListInputField: text});
    textValue = text;
  };

  render () {
    return (
      <div className='text-center'>

        {/*<Webcam height="80%" width="95%" audio={false} style={{zIndex:-5, overflow:'hidden'}}/>*/}

        <Scene>
          {/*<a-assets>*/}
            {/*<img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>*/}
            {/*<img id="skyTexture" src="../../images/Prague_Getty.png"/>*/}
          {/*</a-assets>*/}

          {/*<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>*/}

          <CameraCursor/>

          <AddBlock events={{click: () => this.handleAddClick('#addBlock')}}/>

          <Entity
            primitive="a-keyboard"
            id="toDoListKeyboard"
            className="clickable"
            physical-keyboard="true"
          />

          <Entity
            primitive='a-rounded'
            position="-1.25 1 -2.95"
            width="2.5"
            height="1"
            radius="0.05"
          >
            <Entity
              primitive="a-form"
            >
              <Entity
                primitive="a-input"
                id="toDoItemInputField"
                className="clickable"
                position="0.25 0.6 0"
                placeholder="Description"
                color="black"
                width="2"
                events={{
                  change: () => this.onChangeText(document.querySelector("#toDoItemInputField").value)
                }}
              />

              <Entity
                primitive="a-button"
                position="0.65 0.25 0"
                scale="0.6 0.6 0.6"
                width="1.25"
                value="cancel"
                type="raised"
                button-color="#cccccc"
              />

              <Entity
                primitive="a-button"
                position="1.57 0.25 0"
                scale="0.6 0.6 0.6"
                width="1.25"
                value="save"
                type="raised"
                button-color="green"
              />
            </Entity>
          </Entity>

          <ToDoListContainer>
            {this.state.toDoList.map((listItem) => (
              <ToDoListItem
                key={listItem.itemId}
                id={listItem.itemId}
                text={listItem.text}
                position={{
                  x: 0,
                  y: listItem.posY,
                  z: 0.15
                }}
              />
            ))}
          </ToDoListContainer>

          <Entity light={{type: 'point'}}/>

          {this.state.listItems.map((lizItem) => (
            <EntityElement
              key={lizItem.itemId}
              id={lizItem.itemId}
              position={{
                x: lizItem.posX,
                y: lizItem.posY,
                z: lizItem.posZ
              }}
              events={{
                click: () => this.handleClick(lizItem.itemId)
              }}
            />
          ))}
        </Scene>
      </div>
    );
  }
}

export default Main;
