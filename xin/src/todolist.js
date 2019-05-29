import React, { Component,Fragment } from 'react'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue:'',
      inputList:[]
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="area">输入内容</label>
          <input id="area" value={this.state.inputValue}   onChange={this.handleInputValue.bind(this)}/>
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.inputList.map((item,index) => {
              return (
                <div  key={index}>
                  <TodoItem content={item} index={index} deleteItem={this.handleDelete.bind(this)}/>
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputValue(e){
    this.setState({
      inputValue : e.target.value
    })
  }
  handleSubmit() {
    this.setState({
      inputList:[...this.state.inputList, this.state.inputValue],
      inputValue:''
    })
  }
  handleDelete(index) {
    const list = [...this.state.inputList]
    list.splice(index,1)
    this.setState({
      inputList:list
    })
  }
}
export default TodoList