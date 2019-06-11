# redux的进阶

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

### 拆分UI组件和容器组件

新建立一个文件夹就是单纯的写ui。

```
// TodoListUi.js(UI组件)
import React, { Component } from 'react'
import { Button,Input,List } from 'antd';

class TodoListUi extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
        <div>
          <Input 
            placeholder="输入信息" 
            style={{width:'300px',marginRight:'10px'}} 
            value = {this.props.inputValue}
            onChange={this.props.handleChangeInputValue}
            />
          <Button type="primary" onClick={this.props.handleSubmit}>Primary</Button>
        </div>
        <List
          style={{width:'400px',marginTop:'20px'}}
          bordered
          size="small"
          dataSource={this.props.inputList}
          renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleDelete(index)}}>{item}</List.Item>)}
        />
      </div>      
    )
  }
}


export default TodoListUi
```

```
// todolist.js (入口组件。母组件)

import TodoListUi from './TodoListUi';

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


```

### 无状态组件

```
// 普通带calss的组件。会有生命周期函数，多执行很多，浪费性能，如果只有ui组件，就写成一个函数，性能大幅度提升
import React, { Component } from 'react'
import { Button,Input,List } from 'antd';

const TodoListUi = (props) => {
  return (
    <div>
        <div>
          <Input 
            placeholder="输入信息" 
            style={{width:'300px',marginRight:'10px'}} 
            value = {props.inputValue}
            onChange={props.handleChangeInputValue}
            />
          <Button type="primary" onClick={props.handleSubmit}>Primary</Button>
        </div>
        <List
          style={{width:'400px',marginTop:'20px'}}
          bordered
          size="small"
          dataSource={props.inputList}
          renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleDelete(index)}}>{item}</List.Item>)}
        />
      </div>      
  )
}
```

### reduk-thunk 中间件使用，在giuthub上 redux-devtools 上查找

以前我们吧请求数据的函数写在组件里。处理数据然后给dispatch给action,如果数据很多，组件就会很冗余，所以使用这个中间价，

使用这个中间件，action可以不必写成对象，可以写成函数模式，可以直接在action里面写ajax的异步数据请求。也方便自动化测试

### redux-saga

也是异步获取数据的中间件，

github的地址：https://github.com/redux-saga/redux-saga

大概步骤：

1.配置store的index.js  

```
import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
// 应该获取reducer的数据了
import reducer from './reducer'
import todoSage from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSage)
export default store;
```

2.容器组件进行操作

```
import { sagaGetList } from './store/actionCreate';

 componentDidMount() {
    const action = sagaGetList()
    store.dispatch(action)
  }

// ---响应的actioncerate 和 actionTypes 加上相应的代码---

export const sagaGetList = (data) => ({
  type:SAGA_LIST_ITEM,
})

export const SAGA_LIST_ITEM ='saga_list_item'
```
3.创建一个sagas.js的文件

```
import { takeEvery, put } from 'redux-saga/effects'
import { SAGA_LIST_ITEM } from './actionTypes'
import { listItem } from './actionCreate'
import axios from 'axios'

function* sagaGetList() {
  const res = yield axios.get('https://www.easy-mock.com/mock/5bf4d27d58cc81351fa1f082/example/payIntervalCake')
  const arrData = res.data.data
  const newData = []
  arrData.map((item,index) => {
    newData.push(item.item)
  })  
  const action = listItem(newData)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(SAGA_LIST_ITEM, sagaGetList)
}

export default mySaga;
```


容器组件派发的action，rduecer可以接受，saga也可以接受，接受完以后，执行异步方法，获取数据

获取数据以后，使用put的方法，把数据给reducer。在给store

相当于saga吧应该给reducer的action给截取了。在自己的里面方法里面请求个异步数据，然后通过put吧action给reducer

