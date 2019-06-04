# redux的入门

##### 1.react只是一个轻量的视图层框架

##### 2.入如果组件通信很复杂，组件很多，我们现在需要配套一个数据层的框架。

##### 3.有一个公共的数据。store。其他组件数据都从这个里面获取。。store一旦改变，其他组件也自动重新改变

##### 4.大概的图谱
```
// 比喻成图书馆借书的人。
（1）component 就是借书的人
（2）ActionCreate就是你说借书的那句话，通过dispatch派发你的请求
（3）Store就是图书馆管理员，负责数据的核心
（4）Reducer就是一个小本，管理员不能把所有的记录都记住，所以从这里查找



             dispatch（action）        (previoustate,action)
ActionCreate ----------------> Store  ---------------------->  Reducer
     |                                 <---------------------
     |                           |       (newState)
     |                  (state)  |
     |                           |
     |                           v
      -----------------------Component
```

##### 5.store的创建

1.npm install redux --save

2.新建一个文件夹，设置两个文件 index.js  reducer.js

3.文件编辑

```
// index.js
import { createStore } from 'redux';
// 应该获取reducer的数据了
import reducer from './reducer'
const store = createStore(reducer);

export default store;
```

```
// reducer.js
const defaultState = {
  inputValue:'1234',
  inputList:[1,2,3]
}

export default (state = defaultState,action) => {
  return state
}
```
在组件里面的调用数据， store.getState()  打印就能获取到数据

##### 组件修改store的值，让input的值时刻跟store的值一样，调用dispatch

```
// 组件里  让input的值改变时，store的值跟着变

handleChangeInputValue(e) {
    const action ={
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action)
  }
```

```
// reducer.js里面这么写

// reducer不能直接修改state的值
export default (state = defaultState,action) => {
  if(action.type === 'change_input_value') {
    // 深拷贝，reducer不能直接去修改state的值
    const newState = JSON.parse(JSON.stringify(state))
    // 把组件转给的值复制上去
    newState.inputValue = action.value
    // 返回新的值
    return newState
  }
  return state
}
```

```
// 组件里

constructor(props){
    // 时刻监听store的值
    store.subscribe(this.handleChangeInput.bind(this))
  }

handleChangeInput() {
    // 重新修改state的值。页面才能重新渲染改变
    this.setState(store.getState())
  }
```
##### 点击button按钮 数据添加到list里面

```
// 组件里
constructor(props){
    this.handleSubmit = this.handleSubmit.bind(this)
    store.subscribe(this.handleChangeInput.bind(this))
  }

  handleSubmit() {
    const action = {
      type:'add_item_value'
    }
    store.dispatch(action)
  }
```

```
// reducer.js里面
export default (state = defaultState,action) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'add_item_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}

```

##### 点击单项，删除每一项

```
//组件里
renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}

handleDelete(index) {
    const action = {
      type:'delete_item',
      index
    }
    store.dispatch(action)
  }
```

```
// reducer.js里面
// reducer不能直接修改state的值
export default (state = defaultState,action) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'add_item_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.splice(action.index,1)
    return newState
  }
  return state
}
```

##### 拆分actionTypes

1.其实就是把action派发的type从字符串换成常量。，原因是，一旦你type的字符串写错了，很难找到原因，
常量写错了，直接告诉你定义错误，可以很快的定义出错误的位置

##### 提炼actionCreate

新建立一个actionCreate.js的文件

```
  import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM
} from './actionTypes'

export const handleChangeInputValueAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const handleSubmitAction = () => ({
  type:ADD_ITEM_VALUE
})

export const handleDeleteAction = (index) => ({
  type:DELETE_ITEM,
  index
})
```

```
// 组件里

  import {handleChangeInputValueAction,handleSubmitAction,handleDeleteAction} from './store/actionCreate'

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
```