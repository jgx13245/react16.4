import React,{Component} from 'react'

class TodoItem extends Component {

  constructor(props){
    super(props)
    this.handleDeleteItem=this.handleDeleteItem.bind(this)
  }

  render() {
    return (
      <div onClick={this.handleDeleteItem}>{this.props.content}</div>
    )
  }
  handleDeleteItem() {
    this.props.deleteItem(this.props.index)
  }
}

export default TodoItem