import React, { Component } from "react";
import 'aframe-animation-component';
import 'aframe-material-snickell';
import {Entity, Scene} from 'aframe-react';
import CameraCursor from "../../components/CameraCursor";
import EntityElement from "../../components/Entity";
import AddBlock from "../../components/AddBlock";
import SaveBtn from "../../components/SaveBtn";
import ToDoListContainer from "../../components/ToDoListContainer";
import ToDoListItem from "../../components/ToDoListItems";
// import Webcam from "react-user-media";
import API from "../../utils/API";

let textValue = '';

class Main extends Component {
  state = {
    toDoListInputField: '',
    toDoListModalIsVisible: false,
    toDoList: [],
    listInFocus: '5b49ujbd0b81b00916e2b3c1',
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
    ]
  };

  componentDidMount() {
    this.getTodos(this.state.listInFocus);
    console.log(this.state.toDoList);
  };

  // getLists = () => {
  //   console.log('get triggered');
  //   API.getLists().then(
  //     res => {
  //       console.log(res.data);
  //       this.setState({toDoList: res.data});
  //     }
  //   )
  // };

  // saveLists = (data) => {
  //   console.log('post triggered');
  //   API.saveLists(data).then(
  //     res => {
  //       console.log(res);
  //       this.getLists();
  //     }
  //   );
  //
  //   this.getTodos(this.state.listInFocus);
  //
  // };

  getTodos = (listID) => {
    console.log('get list items triggered');
    API.getTodos(listID).then(
      res => {
        console.log(res.data);
        this.setState({toDoList: res.data});
      }
    )
  };

  saveTodos = (data) => {
    console.log('post triggered');
    API.saveTodos(data).then(
      res => {
        console.log(res);
        this.getTodos(this.state.listInFocus);
      }
    )
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

  handleAddListItemClick = () => {
    this.setState({toDoListModalIsVisible: true});
    document.querySelector('#toDoItemInputField').focus();
  };

  handleSaveListItemClick = () => {
    let toDoListInput = document.querySelector('#toDoItemInputField');
    console.log("save clicked");
    if(this.state.toDoListInputField.length > 0) {
      toDoListInput.blur();
      let newListItem = {
        title: textValue.trim(),
        orderNumber: (this.findLargestOrderNumber() + 1),
        listID: this.state.listInFocus,
      };
      this.saveTodos(newListItem);
      this.setState({
        toDoListInputField: '',
        toDoListModalIsVisible: false
      });
    }
  };

  findLargestOrderNumber = () => {
    let listItemsArray = this.state.toDoList;
    console.log(listItemsArray);
    if (listItemsArray.length > 0) {
      let itemsOrderNumberArray = listItemsArray.map(item => item.orderNumber);
      console.log(itemsOrderNumberArray);
      return itemsOrderNumberArray.reduce((a, b) => Math.max(a,b));
    }
    else {
      return 0;
    }
  };

  handleXListItemClick = () => {
    console.log("x clicked");
    document.querySelector('#toDoItemInputField').blur();
    this.setState({
      toDoListInputField: '',
      toDoListModalIsVisible: false
    });
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
            {/*<img id="skyTexture" src="../../images/Prague_Getty.png"/>*/}
          {/*</a-assets>*/}

          {/*<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>*/}

          <CameraCursor/>

          <AddBlock
            events={{
              click: () => this.handleAddListItemClick()
            }}
          />

          <Entity
            position="0 0.65 0"
          >
            <Entity
              primitive="a-keyboard"
              id="toDoListKeyboard"
              className="clickable"
              physical-keyboard="true"
            />
          </Entity>

          <Entity
            visible={this.state.toDoListModalIsVisible}
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
                disabled={!this.state.toDoListModalIsVisible}
                position="0.25 0.6 0"
                placeholder="Description"
                color="black"
                width="2"
                value={this.state.toDoListInputField}
                events={{
                  change: () => this.onChangeText(document.querySelector("#toDoItemInputField").value)
                }}
              />

              <Entity
                className="clickable"
                primitive="a-button"
                position="2.25 0.85 0"
                scale="0.4 0.4 0.4"
                width="0.1"
                value="X"
                type="raised"
                button-color="red"
                events={{click: () => this.handleXListItemClick()}}
              />

              <SaveBtn
                disabled={this.state.toDoListInputField === ''}
                position="1.57 0.25 0.01"
                events={{click: () => this.handleSaveListItemClick()}}
              />
            </Entity>
          </Entity>

          <ToDoListContainer>
            {this.state.toDoList.map((listItem, index) => (
              <ToDoListItem
                className='toDoListItem'
                key={listItem._id}
                id={listItem._id}
                text={listItem.title}
                posY={`${3 - (0.5 * (index + 1))}`}
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
