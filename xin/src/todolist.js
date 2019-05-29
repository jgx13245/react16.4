import React, { Component,Fragment } from 'react'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue:'',
      inputList:[]
    }
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="area">输入内容</label>
          <input id="area" value={this.state.inputValue}   onChange={this.handleInputValue}/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.state.inputList.map((item,index) => {
              return (
                <div  key={index}>
                  <TodoItem content={item} index={index} deleteItem={this.handleDelete}/>
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputValue(e){
    const value = e.target.value
    this.setState(() => ({
        inputValue : value
      }))
  }
  handleSubmit() {
    this.setState((prevState) => ({
        inputList:[...prevState.inputList, prevState.inputValue],
        inputValue:''
      }))
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.inputList]
      list.splice(index,1)
      return {
        inputList:list
      }
    })
  }
}
export default TodoList