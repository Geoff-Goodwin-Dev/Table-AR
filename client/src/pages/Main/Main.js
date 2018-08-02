import React, { Component } from 'react';
import 'aframe-animation-component';
import 'aframe-material-snickell';
import { Redirect } from "react-router-dom";
import { Entity, Scene } from 'aframe-react';
import CameraCursor from '../../components/CameraCursor';
import { EntityElement }  from '../../components/Entity';
import { AddBlock } from '../../components/AddBlock';
import { SaveBtn } from '../../components/SaveBtn';
import { ToDoListContainer } from '../../components/ToDoListContainer';
import { ToDoListItem } from '../../components/ToDoListItems';
import { CloseCube } from '../../components/CloseCube';
import { CheckboxCube } from '../../components/CheckboxCube';
import WebCam from '../../components/WebCam';
import API from '../../utils/API';
import blocks from '../../blocks';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      pageLoadListsCalled: false,
      inVrMode: false,
      keyboardRotation: '0 0 0',
      listTitleInputField: '',
      listCreateModalIsVisible: false,
      listsOfUser: [],
      listItemTitleInputField: '',
      listItemCreateModalIsVisible: false,
      listItemsOfList: [],
      listInFocus: '',
      listInFocusText: 'none',
      username: null,
      lizItems: blocks
    };
  }

  componentDidMount() {
    document.addEventListener('enter-vr', () => this.toggleVr('enter'));
    console.log('add enter vr listener triggered');
    document.addEventListener('exit-vr', () => this.toggleVr('exit'));
    console.log('add exit vr listener triggered');
    // this.addKeyboardListener();
    this.recursiveWaitForLogin();
  };

  recursiveWaitForLogin = () => {
    if (this.props.loggedIn && this.props.userRecordId) {
      console.log('get lists called');
      this.getListsOfUser('pageLoad');
      console.log('this.props.loggedIn', this.props.loggedIn);
      console.log('this.props.userRecordId', this.props.userRecordId);
      this.setState({pageLoadListsCalled: true});
    }
    else {
      console.log('waiting');
      setTimeout(() => this.recursiveWaitForLogin(), 500);
    }
  };

  componentDidUpdate() {
    if (this.props.redirectTo) {
      this.setState({ redirectTo: this.props.redirectTo })
    }
  }

  keyboardListener = (event) => {
    if (event.defaultPrevented) {
      return;
    }
    let key = event.key || event.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      console.log('escape pressed:', key);
    }

    let valueOfInputField = document.querySelector('#toDoItemInputField').value;
    valueOfInputField += key;
    console.log('valueOfInputField', valueOfInputField);
    console.log('key pressed', key);
    console.log(event);
    this.setState({listItemTitleInputField: valueOfInputField});
  };

  addKeyboardListener = () => {
    console.log('add keyboard listener triggered');
    document.addEventListener('keyup', (event) => this.keyboardListener(event));
  };

  toggleVr = (enterExit) => {
    if (enterExit === 'enter') {
      this.setState({inVrMode: true});
    }
    else if (enterExit === 'exit') {
      this.setState({inVrMode: false});
    }
    else {
      console.log('something went wrong on entering or exiting VR mode')
    }
  };

  getListsOfUser = (triggeringEvent) => {
    console.log('get lists triggered');
    console.log('this.props.userRecordId', this.props.userRecordId);
    API.getLists(this.props.userRecordId)
      .then(
        res => {
          console.log('lists of user:', res.data);
          if (res.data.length > 0) {
            if (triggeringEvent === 'pageLoad') {
              this.setState({
                listsOfUser: res.data,
                listInFocus: res.data[0]._id,
                listInFocusText: res.data[0].listTitle
              })
            }
            else {
              this.setState({
                listsOfUser: res.data
              })
            }
          }
          if (this.state.listsOfUser.length > 0) {
            this.getListItemsOfList(this.state.listInFocus);
          }
        }
      )
  };

  saveNewList = (data) => {
    console.log('post of list triggered');
    API.saveLists(data).then(
      res => {
        console.log(res);
        this.getListsOfUser();
        this.setState({
          listInFocus: res.data._id,
          listInFocusText: res.data.listTitle
        });
        console.log('list now in focus', this.state.listInFocus);
        console.log('list now in focus text', this.state.listInFocusText);
      }
    );
    // this.getListItemsOfList(this.state.listInFocus);
  };

  getListItemsOfList = (listID) => {
    console.log('get list items triggered');
    API.getTodos(listID).then(
      res => {
        console.log('list items of list:', res.data);
        this.setState({listItemsOfList: res.data});
      }
    )
  };

  saveNewListItem = (data) => {
    console.log('post of list item triggered');
    API.saveTodos(data).then(
      res => {
        console.log(res);
        this.getListItemsOfList(this.state.listInFocus);
      }
    )
  };

  deleteListItem = (id) => {
    console.log('delete of list item triggered');
    API.deleteTodos(id).then(
      res => {
        console.log(res);
        this.getListItemsOfList(this.state.listInFocus);
      }
    )
  };

  handleClickLizItem = (id) => {
    const lizItemsArray = this.state.lizItems.filter((item) => item.itemId !== id);
    this.setState({lizItems: lizItemsArray});
  };

  handleAddListItemClick = () => {
    console.log('handleAddListItemClick triggered');
    this.setState({
      keyboardRotation: '0 0 0',
      listItemCreateModalIsVisible: true,
      listCreateModalIsVisible: false
    });
    document.querySelector('#toDoItemInputField').focus();
  };

  handleAddListClick = () => {
    this.setState({
      keyboardRotation: '0 60 0',
      listCreateModalIsVisible: true,
      listItemCreateModalIsVisible: false
    });
    document.querySelector('#listInputField').focus();
  };

  handleSaveListItemClick = () => {
    let toDoListInput = document.querySelector('#toDoItemInputField');
    console.log('save list item clicked');
    if (this.state.listItemTitleInputField.length > 0) {
      toDoListInput.blur();
      let newListItem = {
        title: this.state.listItemTitleInputField.trim(),
        orderNumber: (this.findLargestOrderNumber() + 1),
        listID: this.state.listInFocus,
        authorId: this.props.userRecordId
      };
      this.saveNewListItem(newListItem);
      this.setState({
        listItemTitleInputField: '',
        listItemCreateModalIsVisible: false
      });
    }
  };

  handleSaveListClick = () => {
    let ListInput = document.querySelector('#listInputField');
    console.log('save list clicked');
    if (this.state.listTitleInputField.length > 0) {
      ListInput.blur();
      this.saveNewList({
        listTitle: this.state.listTitleInputField.trim(),
        authorId: this.props.userRecordId
      });
      this.setState({
        listTitleInputField: '',
        listCreateModalIsVisible: false
      });
    }
  };

  findLargestOrderNumber = () => {
    let listItemsArray = this.state.listItemsOfList;
    console.log(listItemsArray);
    if (listItemsArray.length > 0) {
      let itemsOrderNumberArray = listItemsArray.map(item => item.orderNumber);
      console.log(itemsOrderNumberArray);
      return itemsOrderNumberArray.reduce((a, b) => Math.max(a, b));
    }
    else {
      return 0;
    }
  };

  handleSelectListClick = (event) => {
    const {id} = event.target;
    console.log(id, 'selected as list in focus');
    let result = this.state.listsOfUser.filter(list => {
      return list._id === id
    });
    this.setState({
      listInFocus: id,
      listInFocusText: result[0].listTitle
    });
    this.getListItemsOfList(id);
  };

  handleDeleteListItem = (event) => {
    const {id} = event.target.parentEl;
    console.log(id, 'clicked for deletion');
    this.deleteListItem(id);
    this.getListItemsOfList(id);
  };

  handleCloseModal = () => {
    console.log('x clicked');
    document.querySelector('#toDoItemInputField').blur();
    document.querySelector('#listInputField').blur();
    this.setState({
      listTitleInputField: '',
      listCreateModalIsVisible: false,
      listItemTitleInputField: '',
      listItemCreateModalIsVisible: false
    });
  };

  handleToggleDone = (event) => {
    console.log("Done checkbox toggled");
    console.log(event);
    const {id} = event.target.parentEl.parentEl.parentEl;
    console.log(id, 'clicked for toggle of done status');
    // this.toggleDoneListItem(itemId);
    // this.getListItemsOfList(id);
  };

  // toggleDoneListItem = (itemId) => {
  //   API.updateTodos(itemId).then(
  //     res => {
  //       console.log(res);
  //       this.getListItemsOfList(this.state.listInFocus);
  //     }
  //   )
  // };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}} />
    } else {
      return (
        <div className='text-center' >
          <WebCam inVrMode={this.state.inVrMode} />
          <Scene keyboard-shortcuts={{enterVR: false}} >
            <CameraCursor/>

            <Entity rotation={this.state.keyboardRotation}
                    position='0 0.65 0' >
              <Entity primitive='a-keyboard'
                      id='listOfListsKeyboard'
                      className='clickable'
                      physical-keyboard='true' />
            </Entity>

            {/*=============================================================================================
              List of Lists Scene Container
            ==============================================================================================*/}
            <Entity id='ListOfListsSceneComponent'
                    rotation='0 60 0' >

            {/*=============================================================================================
              Modal Container
            ==============================================================================================*/}
              <Entity id='listOfListsModalContainer'
                      position='0 0.65 0' >
                <Entity visible={this.state.listCreateModalIsVisible}
                        primitive='a-rounded'
                        position='-1.25 0.45 -2.95'
                        width='2.5'
                        height='1'
                        radius='0.05' >
                  <Entity primitive='a-form' >
                    <Entity primitive='a-input'
                            id='listInputField'
                            disabled={!this.state.listCreateModalIsVisible}
                            position='0.25 0.6 0'
                            placeholder='Description'
                            color='black'
                            width='2'
                            value={this.state.listTitleInputField}
                            events={{change: (e) => this.setState({'listTitleInputField': e.detail})}} />

                    <Entity className='clickable'
                            primitive='a-button'
                            position='2.25 0.85 0'
                            scale='0.4 0.4 0.4'
                            width='0.1'
                            value='X'
                            type='raised'
                            button-color='red'
                            events={{click: () => this.handleCloseModal()}} />
                    <SaveBtn disabled={this.state.listTitleInputField === ''}
                             position='1.57 0.25 0.01'
                             events={{click: () => this.handleSaveListClick()}} />
                  </Entity>
                </Entity>
              </Entity>

              {/*=============================================================================================
                To Do List Container - List of lists
              ==============================================================================================*/}
              <ToDoListContainer caption='Lists for User:'>
                <AddBlock events={{click: () => this.handleAddListClick()}} />

                <Entity id="userInFocusCaption"
                        position='0 3.25 0'
                        text={{
                          color: 'white',
                          align: 'center',
                          value: this.props.username,
                          opacity: 1,
                          width: 4,
                          side: 'double'
                        }} />

                {this.state.listsOfUser.length > 0 ?
                  this.state.listsOfUser.map((list, index) =>
                    <ToDoListItem class='clickable'
                                  key={list._id}
                                  id={list._id}
                                  text={list.listTitle}
                                  posY={`${3 - (0.5 * (index + 1))}`}
                                  type='list'
                                  events={{
                                    click: () => this.handleSelectListClick
                                  }} />
                  ) : (
                  <Entity position='0 2.5 0.5'
                          text={{
                            color: 'white',
                            align: 'center',
                            value: 'No lists created',
                            opacity: 1,
                            width: 4,
                          }} />
                  )
                }

              </ToDoListContainer>
            </Entity>

            {/*=============================================================================================
              To Do List Items Scene Container
            ==============================================================================================*/}
            <Entity id='toDoListItemsSceneComponent'
                    rotation='0 0 0' >

            {/*=============================================================================================
              Modal Container
             ==============================================================================================*/}
              <Entity id='ModalContainer'
                      position='0 0.65 0' >
                <Entity visible={this.state.listItemCreateModalIsVisible}
                        primitive='a-rounded'
                        position='-1.25 0.45 -2.95'
                        width='2.5'
                        height='1'
                        radius='0.05' >
                  <Entity primitive='a-form' >
                    <Entity primitive='a-input'
                            id='toDoItemInputField'
                            disabled={!this.state.listItemCreateModalIsVisible}
                            position='0.25 0.6 0'
                            placeholder='Description'
                            color='black'
                            width='2'
                            value={this.state.listItemTitleInputField}
                            events={{change: (e) => this.setState({'listItemTitleInputField': e.detail})}} />
                    <Entity className='clickable'
                            primitive='a-button'
                            position='2.25 0.85 0'
                            scale='0.4 0.4 0.4'
                            width='0.1'
                            value='X'
                            type='raised'
                            button-color='red'
                            events={{click: () => this.handleCloseModal()}} />
                    <SaveBtn disabled={this.state.listItemTitleInputField === ''}
                             position='1.57 0.25 0.01'
                             events={{click: () => this.handleSaveListItemClick()}} />
                  </Entity>
                </Entity>
              </Entity>

              {/*=============================================================================================
                To Do List Items Container
            ==============================================================================================*/}
              <ToDoListContainer caption='To Do List:' >
                <AddBlock events={{click: () => this.handleAddListItemClick()}} />

                <Entity id="listInFocusCaption"
                        position='0 3.25 0'
                        text={{
                          color: 'white',
                          align: 'center',
                          value: this.state.listInFocusText,
                          opacity: 1,
                          width: 4,
                          side: 'double'
                        }} />

                {this.state.listItemsOfList.map((listItem, index) => (
                  <ToDoListItem className='toDoListItem'
                                key={listItem._id}
                                id={listItem._id}
                                text={listItem.title}
                                posY={`${3 - (0.5 * (index + 1))}`}
                                events={{
                                  click: () => console.log('list item clicked')
                                }} >
                    <CheckboxCube parentItemId={listItem._id}
                                  events={{click: () => this.handleToggleDone}} >
                      <Entity className='clickable'
                              primitive='a-checkbox'
                              scale='.9 .9 .9'
                              position='-0.095 -0.01 0.096'
                              width='.15'
                              checked={listItem.complete}
                              name={`checkbox${listItem._id}`} />
                    </CheckboxCube>
                    <CloseCube id={listItem._id}
                               events={{click: () => this.handleDeleteListItem}}/>
                  </ToDoListItem>
                ))}

              </ToDoListContainer>
            </Entity>

            {/*=============================================================================================
              Scene Lighting
            ==============================================================================================*/}
            <Entity light={{type: 'point'}}/>

            {/*=============================================================================================
              Liz Items Container
            ==============================================================================================*/}
            {this.state.lizItems.map((lizItem) => (
              <EntityElement key={lizItem.itemId}
                             id={lizItem.itemId}
                             position={{
                               x: lizItem.posX,
                               y: lizItem.posY,
                               z: lizItem.posZ
                             }}
                             events={{click: () => this.handleClickLizItem(lizItem.itemId)}} />
            ))}

          </Scene>
        </div>
      );
    }
  }
}

export default Main;