import React, { Component,Fragment } from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types'


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
                  {test}-{item}
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
// 对传给子组件的数据进行强校验。要不然报错
TodoItem.propTypes = {
  test:PropTypes.string.isRequired,
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
}
// 上面的test 父组件没有传值给子组件，但是isRequired要求必须传，这个时候defaultTypes就是默认给它一个值
TodoItem.defaultTypes = {
  test:'hello world'
}

export default TodoList