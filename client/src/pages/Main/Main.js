import React, { Component } from "react";
import 'aframe';
import 'aframe-animation-component';
import 'aframe-material-snickell';
import {Entity, Scene} from 'aframe-react';
import CameraCursor from "../../components/CameraCursor";
import EntityElement from "../../components/Entity";
import AddBlock from "../../components/AddBlock";
import ToDoListContainer from "../../components/ToDoListContainer";
import ToDoListItem from "../../components/ToDoListItems";
import Webcam from "react-user-media";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      test: "foopie",
      loggedIn: false,
      username: null,
      listItemPosY: 3,
      toDoListInputField: '',
      toDoList: [],
      toDoListKeyboardIsOpen: true,
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

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser (userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
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
    document.querySelector('#toDoItemInputField').value = '';
    this.setState({toDoList: toDoListArray, toDoListInputField: ''});
  };

  onChangeText = (text) => {
    console.log(text);
    this.setState({toDoListInputField: text});
  };

  // openToDoListKeyboard = (id) => {
  //   console.log(id, "open keyboard triggered");
  //   this.setState({toDoListKeyboardIsOpen: true});
  // };

  render () {
    return (
      <div className='text-center'>

        <Webcam height="80%" width="95%" audio={false} style={{zIndex:-5, overflow:'hidden'}}/>
        <p>{this.state.loggedIn.toString()}</p>
        <p>{this.state.username}</p>
        <p>{this.state.test}</p>
        <Scene>
          {/*<a-assets>*/}
            {/*<img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>*/}
            {/*<img id="skyTexture" src="../../images/Prague_Getty.png"/>*/}
          {/*</a-assets>*/}

          {/*<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>*/}

          <CameraCursor/>

          <AddBlock events={{click: () => this.handleAddClick('#addBlock')}}/>

          <Entity id="toDoListKeyboard" className="clickable" primitive="a-keyboard" physical-keyboard="true" is-open={this.state.toDoListKeyboardIsOpen}/>
          <Entity
            id="toDoItemInputField"
            className="clickable"
            primitive="a-input"
            position="-1 5 -5"
            placeholder="Description"
            color="black"
            width="2"
            events={{
              change: () => this.onChangeText(document.querySelector("#toDoItemInputField").value),
              // focus: () => this.openToDoListKeyboard("toDoListKeyboard")
            }}
          />

          <ToDoListContainer>
            {this.state.toDoList.map((listItem) => (
              <ToDoListItem
                key={listItem.itemId}
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

          <Entity light={{type: 'point'}}/>

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
