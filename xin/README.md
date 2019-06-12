# react-redux使用

### 1.react只是一个轻量的视图层框架

### 2.入如果组件通信很复杂，组件很多，我们现在需要配套一个数据层的框架。

### 3.有一个公共的数据。store。其他组件数据都从这个里面获取。。store一旦改变，其他组件也自动重新改变

### 4.大概的图谱
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


### 基础步骤

1. npm install react-redux --save

2. s创建store 新建index.js  reducer.js的文件夹  

```
// index.js

import {createStore} from 'redux'

const store  = new createStore(
  reduxer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

// reducer.js

const defaultState = {
  inputValue:'',
  inputList: []
}

export default (state = defaultState,action) => {
  if(action.type === 'xxx_xxx') {
    const newState = JSON.parse(JSON.stringfy(state))
    ......
  }
  return state
}

```

3. ui组件里面

```
import React from 'react';
import { connect } from 'react-redux'
import './style.css'

const Todolist = (props) => {
  const { inputList,inputValue, handleChangeInput, handelAddItem, handleDelete} = props
  return(
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleChangeInput}/>
        <button onClick={handelAddItem}>提交</button>
      </div>
      <ul>
        {
          inputList.map((item,index) => {
            return <li key={index} onClick={(index) => {handleDelete(index)}}>
             <span>{index}</span>
            {item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   inputValue:state.inputValue,
   inputList:state.inputList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput(e) {
      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action)
    },
    handelAddItem() {
      const action = {
        type:'add_item',
      }
      dispatch(action)
    },
    handleDelete(index) {
      console.log(index)
      console.log('------------------')
      const action = {
        type:'delete_item',
        value:index
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
```
