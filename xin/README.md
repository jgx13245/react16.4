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