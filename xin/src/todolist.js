import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Button,Input,List } from 'antd';
import store from './store'
import {handleChangeInputValueAction,handleSubmitAction,handleDeleteAction} from './store/actionCreate'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    store.subscribe(this.handleChangeInput.bind(this))
  }
  render() {
    return (
      <div>
        <div>
          <Input 
            placeholder="输入信息" 
            style={{width:'300px',marginRight:'10px'}} 
            value = {this.state.inputValue}
            onChange={this.handleChangeInputValue}
            />
          <Button type="primary" onClick={this.handleSubmit}>Primary</Button>
        </div>
        <List
          style={{width:'400px',marginTop:'20px'}}
          bordered
          size="small"
          dataSource={this.state.inputList}
          renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
        />
      </div>      
    )
  }
  handleChangeInputValue(e) {
    const action = handleChangeInputValueAction(e.target.value)
    store.dispatch(action)
  }
  handleChangeInput() {
    this.setState(store.getState())
  }
  handleSubmit() {
    const action = handleSubmitAction()
    store.dispatch(action)
  }
  handleDelete(index) {
    const action = handleDeleteAction(index)
    store.dispatch(action)
  }
}

export default TodoList