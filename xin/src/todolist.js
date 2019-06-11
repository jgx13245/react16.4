import React, { Component } from 'react';
import TodoListUi from './TodoListUi';
import 'antd/dist/antd.css';
import store from './store';
import axios from 'axios'
import { sagaGetList,handleChangeInputValueAction,handleSubmitAction,handleDeleteAction,listItem} from './store/actionCreate';


class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    store.subscribe(this.handleChangeInput)
  }
  render() {
    return (
      <div>
         <TodoListUi 
        inputValue={this.state.inputValue}
        handleChangeInputValue = {this.handleChangeInputValue}
        handleSubmit = {this.handleSubmit}
        inputList = {this.state.inputList}
        handleDelete = {this.handleDelete}
      />
      </div>
    )
  }
  componentDidMount() {
    const action = sagaGetList()
    store.dispatch(action)
    // axios.get('https://www.easy-mock.com/mock/5bf4d27d58cc81351fa1f082/example/payIntervalCake').then(res => {
    //   const arrData = res.data.data
    //   const newData = []
    //   arrData.map((item,index) => {
    //     newData.push(item.item)
    //   })  
    //   const action = listItem(newData)
    //   store.dispatch(action)
    // })
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