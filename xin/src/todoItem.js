import React,{Component} from 'react'

class TodoItem extends Component {

  constructor(props){
    super(props)
    this.handleDeleteItem=this.handleDeleteItem.bind(this)
  }

  render() {
    // es6解构出来
    const { content } = this.props
    return (
      <div onClick={this.handleDeleteItem}>{content}</div>
    )
  }
  handleDeleteItem() {
    // es6解构出来
    const { deleteItem,index } = this.props 
    deleteItem(index)
  }
}

export default TodoItem