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
  // 1.接受父组件传值过来的参数
  // 2.组件第一次存在父组件中，不会被执行
  // 3.第二次以后就会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  // 有时是子组件不一定要一直跟着父组件改变而重新渲染，所以用这个生命周期函数来判断传值是否改变老更改。避免子组件做无用的重新渲染
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }else{
      return false
    }
  } 
}

export default TodoItem